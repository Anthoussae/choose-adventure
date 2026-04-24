const gameData = {
  startingPoints: 100,
  titleText:
    "You are on an interstellar journey to a paradisiacal planet, traveling upon a subluminal-speed space ark. Life on the target planet will be pleasant, as you will be joining a prosperous pre-established pioneer community, will have your own private residence, and are guaranteed an agreeable profession. Choose a points limit (100 = hard, 150 = medium, 200 = easy). Then, design the conditions of your journey!",
  optionsIntro:
    "Each section below represents a configuration of the vessel, to make your journey more agreeable. Some categories are mandatory, some optional, and some permit repeated selections.",
  sections: [
    {
      id: "section-0",
      title: "Thruster Arrays",
      description: "The base travel time to the new world is 20 years.",
      singlepick: false,
      mandatory: false,
      exclusive: false,
      items: [
        {
          id: "time-a",
          name: "Thruster Array",
          description: "Reduce travel time by 1 year.",
          maxPicks: 19,
          cost: 5,
        },
      ],
    },
    {
      id: "section-1",
      title: "Gravitational Centrifuge",
      description:
        "Upon arrival, your muscle mass will be severely depleted, and you will require 12 months of rehabilitation to regain full mobility. A centrifuge can simulate gravity to mitigate this effect.",
      singlepick: true,
      mandatory: true,
      exclusive: true,
      items: [
        {
          id: "grav-a",
          name: "Zero Gravity",
          description: "Gravity is 0g. Muscle atrophy is severe.",
          cost: 0,
        },
        {
          id: "grav-b",
          name: "Constant Centrifuge",
          description: "Sets gravity to 1g",
          cost: 4,
        },
        {
          id: "grav-c",
          name: "Adjustable Centrifuge",
          description:
            "Permits gravity adjustments during the voyage between 0g and 3g",
          cost: 6,
        },
      ],
    },
    {
      id: "section-2",
      title: "Sleeping Quarters",
      singlepick: true,
      mandatory: true,
      exclusive: true,
      items: [
        {
          id: "sleep-a",
          name: "Somni-tube",
          description: "A Spartan and cramped sleeping tube",
          size: 3,
          cost: 0,
        },
        {
          id: "sleep-b",
          name: "Tiny Cabin",
          description: "A diminutive cabin with a small single bed",
          size: 12,
          cost: 3,
        },
        {
          id: "sleep-c",
          name: "Captain's Suite",
          description:
            "A spacious room with a writing-desk and lamp, king size bed, and sofa chair. ",
          size: 40,
          cost: 6,
        },
      ],
    },
    {
      id: "section-3",
      title: "Bathing Facilities",
      singlepick: true,
      mandatory: true,
      exclusive: true,
      items: [
        {
          id: "toilet-a",
          name: "Sani-tube",
          description:
            "A cramped tube containing a toilet and spray shower, with 20L/day capacity, cold water only. (note: average shower on earth is 60L)",
          size: 3,
          cost: 0,
        },
        {
          id: "toilet-b",
          name: "Bathroom",
          description:
            "comfortable bathroom, with a shower, bidet, and large sink. Adds 60L water per day, and allows water to be scalding hot or ice cold if desired.",
          cost: 3,
          size: 18,
        },
        {
          id: "toilet-c",
          name: "Jacuzzi & Sauna Suite",
          description:
            "Luxurious bathroom with a jacuzzi tub, sauna, and multi-setting shower. Adds 120L water per day, and allows water to be scalding hot or ice cold if desired.",
          cost: 6,
          size: 40,
        },
        {
          id: "toilet-d",
          name: "Swimming Pool",
          description:
            "A Jacuzzi suite (as above), with an adjoining 10m x 5m x 3m swimming pool.",
          cost: 15,
          size: 200,
        },
      ],
    },
    {
      id: "section-3b",
      title: "Living Quarters",
      singlepick: true,
      mandatory: true,
      exclusive: true,
      items: [
        {
          id: "living-a",
          name: "Habi-cube",
          description: "A cramped cube with a small table and chair.",
          size: 8,
          cost: 0,
        },
        {
          id: "living-b",
          name: "Living Room",
          description:
            "A comfortable living room with a sofa, armchair, coffee table, and writing desk.",
          size: 48,
          cost: 3,
        },
        {
          id: "living-c",
          name: "Vast Chamber",
          description: "A vast hall, 40x20x10m. in dimensions.",
          size: 8000,
          cost: 5,
        },
      ],
    },
    {
      id: "section-3c",
      title: "Air Filtration",
      singlepick: true,
      mandatory: true,
      exclusive: true,
      items: [
        {
          id: "air-a",
          name: "Stale, Recycled Air",
          description:
            "Air filtration system with minimal filtration. Often smells musty.",
          cost: 0,
        },
        {
          id: "air-b",
          name: "Air Filtration",
          description: "Maintains a reasonable level of air quality.",
          cost: 2,
        },
        {
          id: "air-c",
          name: "High-quality Air Filtration",
          description:
            "Superb air quality, can also reproduce fragrances and natural smells of grass, rain, lavender, etc.",
          cost: 4,
        },
      ],
    },
    {
      id: "section-4",
      title: "Butlerian Computers & Entertainment",
      description:
        "no Internet. No AI generators allowed, inc ChatGPT, Claude, sora AI, etc. No games or programs that incorporate AI, massive file dumps, or otherwise violate the Butlerian spirit.",
      singlepick: false,
      mandatory: false,
      exclusive: false,
      items: [
        {
          id: "comp-a",
          name: "Macbook",
          description:
            "A MacBook Pro (M1 chip) with up to 3 conventional programs/games of your choice installed.",
          cost: 25,
        },
        {
          id: "comp-b",
          name: "Gaming PC",
          description:
            "A high quality gaming PC with up to 5 programs/games of your choice installed, includes quality mouse and accessories, and a gaming chair.",
          cost: 35,
        },
        {
          id: "comp-c",
          name: "Extra Program/Game",
          description: "(requires computer) One additional program/game.",
          cost: 3,
        },
        {
          id: "comp-d",
          name: "Website Archive",
          description:
            "(requires computer) A complete save of any one website you wish, as it was on the day of departure (eg., Wikipedia, scp wiki, etc.). ONLY SAVES TEXT- no images or video. Does not include downloadable content (eg., PDF/Epub books from Anna's Archive or articles from JSTOR)",
          cost: 1,
        },
        {
          id: "comp-e",
          name: "Large Flatscreen TV & DVD Player",
          description:
            "A large flatscreen TV with a DVD player and a selection of 20 DVDs of your choice.",
          cost: 2,
        },
        {
          id: "comp-f",
          name: "Extra DVDs",
          description: "20 extra DVDs.",
          cost: 1,
        },
        {
          id: "comp-g",
          name: "High-Quality Stereo System",
          description:
            "A high-quality stereo system with a selection of 50 music CDs or vinyls of your choice.",
          cost: 2,
        },
        {
          id: "comp-h",
          name: "Extra Music",
          description: "50 extra music CDs or vinyls.",
          cost: 1,
        },
      ],
    },
    {
      id: "section-5",
      title: "Windows & Lighting",
      singlepick: true,
      mandatory: true,
      exclusive: false,
      items: [
        {
          id: "window-a",
          name: "White Neon Lights",
          description:
            "Ship default. Unadorned grey walls with white neon lighting, constantly on.",
          cost: 0,
        },
        {
          id: "window-d",
          name: "Space Windows",
          description:
            "Large viewports to gaze out at the vastness of space, placed wherever you wish throuhgout the ship. Adjustable opacity.",
          cost: 1,
        },
        {
          id: "window-b",
          name: "Environmental Lighting",
          description:
            "Environmental lighting, adjustable colors and tones and schedule-setting to simulate night/day, seasons, etc.",
          cost: 1,
        },

        {
          id: "window-c",
          name: "Virtual Windows",
          description:
            "Virtual windows with adjustable views and schedules to simulate night/day, seasons, etc. Selection of terrestrial landscapes to choose from, but exclusively nature and landscapes. Can simulate rainfall, sea waves, waving wheat fields, etc., and play realistic nature sounds.",
          cost: 2,
        },
      ],
    },
    {
      id: "section-6",
      title: "Food",
      singlepick: true,
      mandatory: true,
      exclusive: false,
      items: [
        {
          id: "food-a",
          name: "Nutri-Slop",
          description:
            "Three rations of flavorless grey nutrient slop per day.",
          cost: 0,
        },
        {
          id: "food-b",
          name: "Fast-Food Synthesizer",
          description:
            "Automatically generates food from the menus of 3 fast food chains (you choose upon selection). Max 3,000 calories per day. Excludes alcohol.",
          cost: 1,
        },
        {
          id: "food-c",
          name: "Kitchen and Ingredients Synthesizer",
          description:
            "Generates fresh ingredients and allows for cooking and baking. Max 4,000 calories per day. Excludes alcohol.",
          cost: 3,
          size: 32,
        },
        {
          id: "food-d",
          name: "Gourmet Synthesizer",
          description:
            "Automatically generates gourment meals from any cuisine in the world. Max 3,000 calories per day. Excludes alcohol.",
          cost: 5,
        },
        {
          id: "food-e",
          name: "Alcohol Synthesizer",
          description:
            "Generates alcoholic beverages of any type, from beer and wine to complex cocktails. Max 5 standard drinks per day.",
          cost: 1,
        },
      ],
    },
    {
      id: "section-7",
      title: "Reading, Gaming, & Art Materials",
      description:
        "The ship comes with one copy of the Gideon bible and 12 National Geographic magazines published between 1985 and 1999.",
      singlepick: false,
      mandatory: false,
      exclusive: false,
      items: [
        {
          id: "book-a",
          name: "Twenty Books",
          description: "Twenty books of your choice.",
          cost: 1,
        },
        {
          id: "book-b",
          name: "Drawing and Painting Materials",
          description:
            "5 years' worth of high quality drawing and painting materials, including pencils, pens, markers, pastels, paints, brushes, and high quality paper.",
          cost: 2,
        },
        {
          id: "book-c",
          name: "Board and Card Games",
          description:
            "A selection of 10 board and card games of your choice. Card games cannot exceed 5,000 cards total.",
          cost: 1,
        },
        {
          id: "book-d",
          name: "Crafting Materials",
          description:
            "5 years' worth of crafting materials for any one type of simple project not requiring complex equipment (knitting, sewing, etc.).",
          cost: 2,
        },
      ],
    },
    {
      id: "section-8",
      title: "Interior decoration",
      singlepick: true,
      mandatory: true,
      exclusive: true,
      items: [
        {
          id: "interior-a",
          name: "Grey, featureless walls",
          description: "Grey, featureless walls.",
          cost: 0,
        },
        {
          id: "interior-b",
          name: "Washiki",
          description:
            "Refit the whole ship with tatami, shōji, and tasteful Japanese decorative touches.",
          cost: 1,
        },
        {
          id: "interior-c",
          name: "Oxford",
          description:
            "Refit the whole ship with dark wood paneling, leather furniture, and classic Oxford-style decor.",
          cost: 1,
        },
        {
          id: "interior-d",
          name: "Redesign",
          description:
            "Fit the whole ship with any other unified aesthetic or interior decor of your choice (eg., cyberpunk, boho, Century modern, Wuxia, Arabian nights, etc.)",
          cost: 2,
        },
      ],
    },
    {
      id: "section-9",
      title: "Special Habitat Units",
      singlepick: true,
      mandatory: false,
      exclusive: false,
      items: [
        {
          id: "hab-a",
          name: "Greenhouse",
          description:
            "A greenhouse with a selection of plants of your choice, complete with water, soil, and nutrient system. (4mx4mx3m). Contains up to 30 plants or small trees of your choice, and 20 years’ worth of seeds to replace them if needed.",
          cost: 15,
          size: 60,
        },
        {
          id: "hab-b",
          name: "Gymnasium",
          description:
            "A gym with exercise bike, treadmill, weights, yoga mats, and other standard gym equipment. Largely useless without gravity.",
          cost: 7,
          size: 60,
        },
        {
          id: "hab-c",
          name: "Library",
          description:
            "A cosy wood-paneled library with comfortable seating and reading lamps. Includes 100 books of your choice.",
          cost: 10,
          size: 120,
        },
        {
          id: "hab-d",
          name: "Sculpting and Ceramics Studio",
          description:
            "A sculpting and ceramics studio, with a selection of high quality clays, sculpting tools, and a kiln capable of firing your creations. Enough materials for 10 years.",
          cost: 10,
          size: 80,
        },
        {
          id: "hab-e",
          name: "Modeling and Wargames Studio",
          description:
            " A modeling and wargames studio, with high quality modeling materials, paints, and tools, and a large table for gaming. Includes 10 years' worth of materials.",
          cost: 10,
          size: 80,
        },
        {
          id: "hab-f",
          name: "Music Studio",
          description:
            "A music studio with a high quality microphone, MIDI keyboard, and recording and mixing software installed on the ship's computer. 5 musical instruments of your choice.",
          cost: 10,
          size: 40,
        },
        {
          id: "hab-g",
          name: "Woodshop",
          description:
            "A woodshop with a selection of high quality woodworking tools, materials, and safety equipment. Includes 10 years' worth of materials.",
          cost: 10,
          size: 80,
        },
      ],
    },
    {
      id: "section-10",
      title: "Humans",
      description:
        "You can agree to travel on a joint ark-ship alongside other humans, if you wish. If any of you commit any crimes during the voyage, you will be held responsible upon arrival at the destination. Additional humans' living quarters etc. are the same as your own, but no other facilities are expanded.",
      singlepick: false,
      mandatory: false,
      exclusive: false,
      items: [
        {
          id: "hum-a",
          name: "Random Human",
          description:
            "One random human, aged 18-35. Their nationality, personality, spoken languages, values, and behavior are completely unpredictable.",
          cost: 1,
        },
        {
          id: "hum-b",
          name: "Semi-Random Human",
          description:
            "One semi-random human, aged 18-35. You may select their nationality and gender, but not their temperament, behavior, etc.",
          cost: 3,
        },
        {
          id: "hum-c",
          name: "Highly Selected Human",
          description:
            "One human, aged 18-35. You may specify their nationality, gender, education level, degree (if applicable), profession, and 1 hobby.",
          cost: 5,
        },
      ],
    },
  ],
};

let currentBasePoints = gameData.startingPoints;
let points = gameData.startingPoints;
const selectedCounts = {};

const pointsEl = document.getElementById("points-remaining");
const setupList = document.getElementById("current-setup");
const optionsContainer = document.getElementById("options-container");
const titleTextEl = document.getElementById("title-text");
const optionsIntroEl = document.getElementById("options-intro");
const resetButton = document.getElementById("reset-button");
const hardButton = document.getElementById("hard-button");
const mediumButton = document.getElementById("medium-button");
const easyButton = document.getElementById("easy-button");

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
  clearAllSelections();
  initializeMandatoryDefaults();
  recalculatePointsFromBase(currentBasePoints);

  updatePointsDisplay();
  updateCurrentSetupDisplay();
  renderOptions();
}
function setActiveDifficultyButton(button) {
  [hardButton, mediumButton, easyButton].forEach((btn) => {
    btn.classList.remove("active");
  });

  button.classList.add("active");
}

function setDifficultyPoints(basePoints) {
  currentBasePoints = basePoints;
  resetAll();
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
  const currentCount = getItemCount(item.id);

  if (item.requires && !hasChosenItem(item.requires)) {
    return false;
  }

  if (points < item.cost) {
    return false;
  }

  if (item.maxPicks !== undefined && currentCount >= item.maxPicks) {
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
    return "You must select at least one of the following. Each item may be chosen multiple times.";
  }

  if (!exclusive && !mandatory && singlepick) {
    return "You may select any number of the following. Each item may be chosen once.";
  }

  if (!exclusive && !mandatory && !singlepick) {
    return "You may select any number of the following. Each item may be chosen multiple times.";
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
    reduceItemCount(section, item);
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
function getTotalSelectedCountForSection(sectionId) {
  let total = 0;

  gameData.sections.forEach((section) => {
    if (section.id !== sectionId) {
      return;
    }

    section.items.forEach((item) => {
      total += getItemCount(item.id);
    });
  });

  return total;
}
function reduceItemCount(section, item) {
  const count = getItemCount(item.id);

  if (count <= 0) {
    return;
  }

  const totalSelectedInSection = getTotalSelectedCountForSection(section.id);

  if (section.mandatory && totalSelectedInSection <= 1) {
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

      const atMaxPicks = item.maxPicks !== undefined && count >= item.maxPicks;

      if ((!isSelected && !canSelectItem(section, item)) || atMaxPicks) {
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

        if (item.maxPicks !== undefined) {
          itemDescription.textContent = `${item.description} Max picks: ${item.maxPicks}.`;
        } else {
          itemDescription.textContent = item.description;
        }

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
          reduceItemCount(section, item);
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
hardButton.addEventListener("click", () => {
  setDifficultyPoints(100);
  setActiveDifficultyButton(hardButton);
});

mediumButton.addEventListener("click", () => {
  setDifficultyPoints(150);
  setActiveDifficultyButton(mediumButton);
});

easyButton.addEventListener("click", () => {
  setDifficultyPoints(200);
  setActiveDifficultyButton(easyButton);
});
initializeMandatoryDefaults();
recalculatePointsFromBase(currentBasePoints);
renderPageText();
updatePointsDisplay();
updateCurrentSetupDisplay();
renderOptions();
setActiveDifficultyButton(hardButton);
