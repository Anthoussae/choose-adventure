const gameData = {
  startingPoints: 100,
  titleText:
    "Configure your ark ship by allocating points across its systems, drives, drones, and colonist infrastructure.",

  optionsIntro:
    "Each section below represents a major subsystem of the vessel. Some categories are mandatory, some optional, and some permit repeated selections.",

  sections: [
    {
      id: "section-1",
      title: "Core Systems",
      description:
        "These are the baseline technical systems that determine how the ship functions during ordinary operation.",

      singlepick: true,
      mandatory: false,
      exclusive: false,
      items: [
        {
          id: "core-a",
          name: "Survey Array",
          description: "Basic long-range sensor package",
          cost: 10,
        },
        {
          id: "core-b",
          name: "Navigation Spine",
          description: "Enhanced route-planning core",
          cost: 20,
        },
      ],
    },
    {
      id: "section-2",
      title: "Command Modules",
      singlepick: true,
      mandatory: true,
      exclusive: false,
      items: [
        {
          id: "command-a",
          name: "Command Nexus",
          description: "Standard bridge and coordination deck",
          cost: 12,
        },
        {
          id: "command-b",
          name: "Tactical Choir",
          description: "Distributed battle-management station",
          cost: 18,
        },
      ],
    },
    {
      id: "section-3",
      title: "Primary Drives",
      singlepick: true,
      mandatory: false,
      exclusive: true,
      items: [
        {
          id: "drive-a",
          name: "Ion Sail",
          description: "Reliable low-draw propulsion system",
          cost: 14,
        },
        {
          id: "drive-b",
          name: "Gravitic Lance",
          description: "High-output deep-space drive",
          cost: 24,
        },
      ],
    },
    {
      id: "section-4",
      title: "Ark Core",
      singlepick: true,
      mandatory: true,
      exclusive: true,
      items: [
        {
          id: "ark-a",
          name: "Pilgrim Core",
          description: "Compact colony-support heart module",
          cost: 25,
        },
        {
          id: "ark-b",
          name: "Cathedral Core",
          description: "Expanded command-and-life-support nucleus",
          cost: 35,
        },
      ],
    },
    {
      id: "section-5",
      title: "Drone Wings",
      singlepick: false,
      mandatory: false,
      exclusive: false,
      items: [
        {
          id: "drone-a",
          name: "Repair Drone Swarm",
          description: "Hull repair and maintenance units",
          cost: 6,
        },
        {
          id: "drone-b",
          name: "Harvest Drone Swarm",
          description: "Resource capture and salvage units",
          cost: 8,
        },
      ],
    },
    {
      id: "section-6",
      title: "Colonist Assets",
      singlepick: false,
      mandatory: true,
      exclusive: false,
      items: [
        {
          id: "colonist-a",
          name: "Cryo Pod Bank",
          description: "Suspended colonist population block",
          cost: 9,
        },
        {
          id: "colonist-b",
          name: "Seed Vault",
          description: "Genetic archive and agricultural reserve",
          cost: 11,
        },
      ],
    },
  ],
};
let points = gameData.startingPoints;
const selectedCounts = {};

const pointsEl = document.getElementById("points-remaining");
const setupList = document.getElementById("current-setup");
const optionsContainer = document.getElementById("options-container");
const titleTextEl = document.getElementById("title-text");
const optionsIntroEl = document.getElementById("options-intro");
const pointsInput = document.getElementById("points-input");
const resetButton = document.getElementById("reset-button");
const setPointsButton = document.getElementById("set-points-button");

function updatePointsDisplay() {
  pointsEl.textContent = points;
}
function renderPageText() {
  titleTextEl.textContent = gameData.titleText || "";
  optionsIntroEl.textContent = gameData.optionsIntro || "";
}

function getCurrentSelectionCost() {
  let total = 0;

  gameData.sections.forEach((section) => {
    section.items.forEach((item) => {
      total += item.cost * getItemCount(item.id);
    });
  });

  return total;
}

function clearAllSelections() {
  Object.keys(selectedCounts).forEach((itemId) => {
    delete selectedCounts[itemId];
  });
}

function initializeMandatoryDefaults() {
  gameData.sections.forEach((section) => {
    if (!section.mandatory) {
      return;
    }

    const firstItem = section.items[0];

    if (!firstItem) {
      return;
    }

    selectedCounts[firstItem.id] = 1;
  });
}

function recalculatePointsFromBase(basePoints) {
  points = basePoints - getCurrentSelectionCost();
}

function resetAll() {
  const basePoints = Number(pointsInput.value) || 0;

  clearAllSelections();
  initializeMandatoryDefaults();
  recalculatePointsFromBase(basePoints);

  updatePointsDisplay();
  updateCurrentSetupDisplay();
  renderOptions();
}

function applyPointsValue() {
  const basePoints = Number(pointsInput.value) || 0;
  recalculatePointsFromBase(basePoints);

  updatePointsDisplay();
  updateCurrentSetupDisplay();
  renderOptions();
}

function getItemCount(itemId) {
  return selectedCounts[itemId] || 0;
}

function hasChosenItem(itemId) {
  return getItemCount(itemId) > 0;
}

function getSelectedItemsForSection(sectionId) {
  const selectedItems = [];

  gameData.sections.forEach((section) => {
    if (section.id !== sectionId) return;

    section.items.forEach((item) => {
      if (getItemCount(item.id) > 0) {
        selectedItems.push(item);
      }
    });
  });

  return selectedItems;
}

function getAllSelectedItems() {
  const selectedItems = [];

  gameData.sections.forEach((section) => {
    section.items.forEach((item) => {
      const count = getItemCount(item.id);

      if (count > 0) {
        selectedItems.push({
          ...item,
          sectionId: section.id,
          count,
        });
      }
    });
  });

  return selectedItems;
}

function flashSection(sectionId) {
  const el = document.querySelector(
    `.subsection[data-section-id="${sectionId}"]`,
  );

  if (!el) return;

  el.classList.add("section-error");

  setTimeout(() => {
    el.classList.remove("section-error");
  }, 400);
}

function getSectionTitleById(sectionId) {
  const section = gameData.sections.find((s) => s.id === sectionId);
  return section ? section.title : "";
}
function updateCurrentSetupDisplay() {
  setupList.innerHTML = "";

  const selectedItems = getAllSelectedItems();

  if (selectedItems.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No selections yet.";
    setupList.appendChild(li);
    return;
  }

  // Group items by section
  const grouped = {};

  selectedItems.forEach((item) => {
    if (!grouped[item.sectionId]) {
      grouped[item.sectionId] = [];
    }
    grouped[item.sectionId].push(item);
  });

  // Render grouped output
  Object.keys(grouped).forEach((sectionId) => {
    const section = gameData.sections.find((s) => s.id === sectionId);

    // Section header (bold)
    const sectionLi = document.createElement("li");
    sectionLi.className = "setup-section";
    sectionLi.textContent = section.title;
    setupList.appendChild(sectionLi);

    // Items under section
    grouped[sectionId].forEach((item) => {
      const itemLi = document.createElement("li");
      itemLi.className = "setup-item";

      if (item.count === 1) {
        itemLi.textContent = item.name;
      } else {
        itemLi.textContent = `${item.name} x${item.count}`;
      }

      setupList.appendChild(itemLi);
    });
  });
}
function canSelectItem(section, item) {
  if (item.requires && !hasChosenItem(item.requires)) {
    return false;
  }

  if (points < item.cost) {
    return false;
  }

  if (section.exclusive) {
    return true;
  }

  if (section.singlepick && hasChosenItem(item.id)) {
    return false;
  }

  return true;
}

function getSectionRulesText(section) {
  const { mandatory, exclusive, singlepick } = section;

  if (exclusive && mandatory) {
    return "You must select exactly one of the following.";
  }

  if (exclusive && !mandatory) {
    return "You may select up to one of the following.";
  }

  if (!exclusive && mandatory && singlepick) {
    return "You must select at least one of the following. Each item may be chosen once.";
  }

  if (!exclusive && mandatory && !singlepick) {
    return "You must select at least one of the following. Each item may be chosen any number of times.";
  }

  if (!exclusive && !mandatory && singlepick) {
    return "You may select any number of the following. Each item may be chosen once.";
  }

  if (!exclusive && !mandatory && !singlepick) {
    return "You may select any number of the following. Each item may be chosen any number of times.";
  }

  return "";
}
function selectItem(section, item) {
  const currentCount = getItemCount(item.id);

  // If this section allows repeat picks, each click adds one more.
  if (!section.singlepick && !section.exclusive) {
    if (!canSelectItem(section, item)) {
      if (points < item.cost) {
        flashSection(section.id);
      }
      return;
    }

    selectedCounts[item.id] = currentCount + 1;
    points -= item.cost;

    updatePointsDisplay();
    updateCurrentSetupDisplay();
    renderOptions();
    return;
  }

  // For single-pick or exclusive sections, clicking an already-selected item deselects it.
  if (currentCount > 0) {
    reduceItemCount(item);
    return;
  }
  if (!canSelectItem(section, item)) {
    return;
  }

  if (section.exclusive) {
    const selectedItemsInSection = getSelectedItemsForSection(section.id);

    selectedItemsInSection.forEach((selectedItem) => {
      const count = getItemCount(selectedItem.id);

      points += selectedItem.cost * count;
      delete selectedCounts[selectedItem.id];
    });

    selectedCounts[item.id] = 1;
    points -= item.cost;
  } else if (section.singlepick) {
    selectedCounts[item.id] = 1;
    points -= item.cost;
  } else {
    selectedCounts[item.id] = 1;
    points -= item.cost;
  }

  updatePointsDisplay();
  updateCurrentSetupDisplay();
  renderOptions();
}

function reduceItemCount(item) {
  const count = getItemCount(item.id);

  if (count <= 0) {
    return;
  }

  selectedCounts[item.id] = count - 1;
  points += item.cost;

  if (selectedCounts[item.id] === 0) {
    delete selectedCounts[item.id];
  }

  updatePointsDisplay();
  updateCurrentSetupDisplay();
  renderOptions();
}
function initializeMandatoryDefaults() {
  gameData.sections.forEach((section) => {
    if (!section.mandatory) {
      return;
    }

    const firstValidItem = section.items.find((item) => {
      if (item.requires && !hasChosenItem(item.requires)) {
        return false;
      }

      return true;
    });

    if (!firstValidItem) {
      return;
    }

    selectedCounts[firstValidItem.id] = 1;
    points -= firstValidItem.cost;
  });
}

function renderOptions() {
  optionsContainer.innerHTML = "";

  gameData.sections.forEach((section) => {
    const sectionWrapper = document.createElement("div");
    sectionWrapper.className = "subsection";
    sectionWrapper.dataset.sectionId = section.id;

    const heading = document.createElement("h3");
    heading.textContent = section.title;
    sectionWrapper.appendChild(heading);

    if (section.description) {
      const sectionDescription = document.createElement("p");
      sectionDescription.className = "section-description";
      sectionDescription.textContent = section.description;
      sectionWrapper.appendChild(sectionDescription);
    }

    const rules = document.createElement("p");
    rules.className = "section-rules";
    rules.textContent = getSectionRulesText(section);
    sectionWrapper.appendChild(rules);

    section.items.forEach((item) => {
      const button = document.createElement("button");
      button.className = "entry";
      button.type = "button";

      const count = getItemCount(item.id);
      const isSelected = count > 0;

      if (isSelected) {
        button.classList.add("selected");
      }

      if (!isSelected && !canSelectItem(section, item)) {
        button.disabled = true;
      }

      const textSpan = document.createElement("span");
      textSpan.className = "entry-text";

      const itemName = document.createElement("div");
      itemName.className = "entry-name";
      itemName.textContent = `${item.name} (${item.cost} pts)`;
      textSpan.appendChild(itemName);

      if (item.description) {
        const itemDescription = document.createElement("div");
        itemDescription.className = "entry-description";
        itemDescription.textContent = item.description;
        textSpan.appendChild(itemDescription);
      }

      if (item.requires) {
        const requiresText = document.createElement("div");
        requiresText.className = "entry-requires";
        requiresText.textContent = `[Requires ${item.requires}]`;
        textSpan.appendChild(requiresText);
      }

      button.appendChild(textSpan);

      if (!section.singlepick && count > 0) {
        const countBadge = document.createElement("span");
        countBadge.className = "entry-count";
        countBadge.textContent = count;

        countBadge.addEventListener("click", (event) => {
          event.stopPropagation();
          reduceItemCount(item);
        });

        button.appendChild(countBadge);
      }

      button.addEventListener("click", () => {
        selectItem(section, item);
      });

      sectionWrapper.appendChild(button);
    });

    optionsContainer.appendChild(sectionWrapper);
  });
}

resetButton.addEventListener("click", () => {
  resetAll();
});

setPointsButton.addEventListener("click", () => {
  applyPointsValue();
});
initializeMandatoryDefaults();
recalculatePointsFromBase(Number(pointsInput.value) || gameData.startingPoints);
renderPageText();
updatePointsDisplay();
updateCurrentSetupDisplay();
renderOptions();
