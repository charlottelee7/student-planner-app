document.addEventListener("DOMContentLoaded", () => {
  const appThemes = [
    {
      id: "pink",
      bgMain: "#ffebff",
      bgSecondary: "#ffebff",
      navBg: "#ff6dff",
      navText: "#ffeaf7",
      buttonBg: "#ff92ff",
      buttonHover: "#e99ee9",
      buttonText: "#ffffff",
      cardBg: "#ffffff",
      cardSoft: "rgba(255,255,255,0.65)",
      textMain: "#333333",
      textMuted: "#666666",
      textSoft: "#777777",
      borderSoft: "#cccccc",
      accent: "#fd61fd",
      accentSoft: "#ffb4ff",
      accentPale: "#ffd5f7",
      accentPale2: "#ffe5f7",
      statsTrack: "#f2e9f9",
      danger: "#8a63de",
      important: "#ffdd00"
    },
    {
      id: "blue",
      bgMain: "#e3efff",
      bgSecondary: "#f4f8ff",
      navBg: "#5d8dff",
      navText: "#eef4ff",
      buttonBg: "#7fa6ff",
      buttonHover: "#5f88e8",
      buttonText: "#ffffff",
      cardBg: "#ffffff",
      cardSoft: "rgba(255,255,255,0.65)",
      textMain: "#333333",
      textMuted: "#666666",
      textSoft: "#777777",
      borderSoft: "#cccccc",
      accent: "#5d8dff",
      accentSoft: "#b8ccff",
      accentPale: "#d9e5ff",
      accentPale2: "#edf3ff",
      statsTrack: "#e8efff",
      danger: "#e28409",
      important: "#ffd500"
    },
    {
      id: "green",
      bgMain: "#e3f8ea",
      bgSecondary: "#f3fcf6",
      navBg: "#46b96d",
      navText: "#eefbf2",
      buttonBg: "#63ca87",
      buttonHover: "#44aa68",
      buttonText: "#ffffff",
      cardBg: "#ffffff",
      cardSoft: "rgba(255,255,255,0.65)",
      textMain: "#333333",
      textMuted: "#666666",
      textSoft: "#777777",
      borderSoft: "#cccccc",
      accent: "#46b96d",
      accentSoft: "#a8e1ba",
      accentPale: "#d9f1e1",
      accentPale2: "#ecf9f0",
      statsTrack: "#e5f4ea",
      danger: "#e8e21d",
      important: "#e100ff"
    },
    {
      id: "purple",
      bgMain: "#ffffff",
      bgSecondary: "#ffffff",
      navBg: "#d7d7d7",
      navText: "#505050",
      buttonBg: "#e2e2e2",
      buttonHover: "#bfceff",
      buttonText: "#505050",
      cardBg: "#ececec",
      cardSoft: "#f5f5f5",
      textMain: "#505050",
      textMuted: "#666666",
      textSoft: "#777777",
      borderSoft: "#cccccc",
      accent: "#efefef",
      accentSoft: "#f4f4f4",
      accentPale: "#f4f4f4",
      accentPale2: "#9d9d9d",
      statsTrack: "#e1e1e1",
      danger: "#d9534f",
      important: "#ff3b3b"
    },
    {
      id: "orange",
      bgMain: "#eadbff",
      bgSecondary: "#eadbff",
      navBg: "#9e61f3",
      navText: "#fdf0bb",
      buttonBg: "#ae7ef2",
      buttonHover: "#918d1e25",
      buttonText: "#fffbec",
      cardBg: "#ffffec",
      cardSoft: "#fffec9",
      textMain: "#720ca2",
      textMuted: "#8c3ab2",
      textSoft: "#9f40cb",
      borderSoft: "#bd54ff",
      accent: "#9e61f3",
      accentSoft: "#b180f7",
      accentPale: "#d3bdf3",
      accentPale2: "#fff0e7",
      statsTrack: "#fffef3",
      danger: "#f88f43",
      important: "#00f2ff"
    },
    {
      id: "yellow",
      bgMain: "#fff5d8",
      bgSecondary: "#fffbee",
      navBg: "#e0b400",
      navText: "#fffbe6",
      buttonBg: "#f0c63b",
      buttonHover: "#c79f00",
      buttonText: "#ffffff",
      cardBg: "#ffffff",
      cardSoft: "rgba(255,255,255,0.65)",
      textMain: "#333333",
      textMuted: "#666666",
      textSoft: "#777777",
      borderSoft: "#cccccc",
      accent: "#e0b400",
      accentSoft: "#f4df8a",
      accentPale: "#fff0b8",
      accentPale2: "#fff7da",
      statsTrack: "#f8f0c7",
      danger: "#d9534f",
      important: "#ff3b3b"
    },
    {
      id: "teal",
      bgMain: "#ddf7f5",
      bgSecondary: "#effcfb",
      navBg: "#20b8b0",
      navText: "#eafffb",
      buttonBg: "#42ccc5",
      buttonHover: "#17958e",
      buttonText: "#ffffff",
      cardBg: "#ffffff",
      cardSoft: "rgba(255,255,255,0.65)",
      textMain: "#333333",
      textMuted: "#666666",
      textSoft: "#777777",
      borderSoft: "#cccccc",
      accent: "#20b8b0",
      accentSoft: "#9ce3de",
      accentPale: "#d4f3f0",
      accentPale2: "#e8faf8",
      statsTrack: "#e0f4f2",
      danger: "#d9534f",
      important: "#ff3b3b"
    },
    {
      id: "red",
      bgMain: "#1d1d1d",
      bgSecondary: "#1d1d1d",
      navBg: "#131313",
      navText: "#a9a9a9",
      buttonBg: "#131313",
      buttonHover: "#e2546ed0",
      buttonText: "#b2b2b2",
      cardBg: "#222222",
      cardSoft: "#2b2b2b",
      textMain: "#ababab",
      textMuted: "#979797",
      textSoft: "#a5a5a5",
      borderSoft: "#ececec",
      accent: "#e2546e",
      accentSoft: "#634a4a",
      accentPale: "#a28484",
      accentPale2: "#fff0f0",
      statsTrack: "#fbe5e5",
      danger: "#e2546e",
      important: "#3e19c4"
    }
  ];

  function applyTheme(themeId) {
    const theme = appThemes.find(t => t.id === themeId) || appThemes[0];
    document.documentElement.style.setProperty("--bg-main", theme.bgMain);
    document.documentElement.style.setProperty("--bg-secondary", theme.bgSecondary);
    document.documentElement.style.setProperty("--nav-bg", theme.navBg);
    document.documentElement.style.setProperty("--nav-text", theme.navText);
    document.documentElement.style.setProperty("--button-bg", theme.buttonBg);
    document.documentElement.style.setProperty("--button-hover", theme.buttonHover);
    document.documentElement.style.setProperty("--button-text", theme.buttonText);
    document.documentElement.style.setProperty("--card-bg", theme.cardBg);
    document.documentElement.style.setProperty("--card-soft", theme.cardSoft);
    document.documentElement.style.setProperty("--text-main", theme.textMain);
    document.documentElement.style.setProperty("--text-muted", theme.textMuted);
    document.documentElement.style.setProperty("--text-soft", theme.textSoft);
    document.documentElement.style.setProperty("--border-soft", theme.borderSoft);
    document.documentElement.style.setProperty("--accent", theme.accent);
    document.documentElement.style.setProperty("--accent-soft", theme.accentSoft);
    document.documentElement.style.setProperty("--accent-pale", theme.accentPale);
    document.documentElement.style.setProperty("--accent-pale-2", theme.accentPale2);
    document.documentElement.style.setProperty("--stats-track", theme.statsTrack);
    document.documentElement.style.setProperty("--danger", theme.danger);
    document.documentElement.style.setProperty("--important", theme.important);

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", theme.navBg);
    }

    localStorage.setItem("appTheme", theme.id);
  }

  applyTheme(localStorage.getItem("appTheme") || "pink");

  function formatTime(totalSeconds) {
    const safeSeconds = Math.max(0, Number(totalSeconds) || 0);
    const hrs = String(Math.floor(safeSeconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((safeSeconds % 3600) / 60)).padStart(2, "0");
    const secs = String(safeSeconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  }

  function formatShortTime(totalSeconds) {
    const safeSeconds = Math.max(0, Number(totalSeconds) || 0);
    const mins = String(Math.floor(safeSeconds / 60)).padStart(2, "0");
    const secs = String(safeSeconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  }

  function getTodayString() {
    return new Date().toISOString().split("T")[0];
  }

  function getSharedTimerState() {
    const state = JSON.parse(localStorage.getItem("timerSharedState")) || null;
    if (!state) return null;

    if (state.lastUpdatedAt && state.isRunning) {
      const now = Date.now();
      const diffSeconds = Math.floor((now - state.lastUpdatedAt) / 1000);

      if (diffSeconds > 0) {
        if (state.currentMode === "stopwatch") {
          state.currentSeconds += diffSeconds;
          state.lastUpdatedAt = now;
          localStorage.setItem("timerSharedState", JSON.stringify(state));
        } else {
          let remainingDiff = diffSeconds;

          while (remainingDiff > 0 && state.isRunning) {
            if (state.isBreakActive) {
              if (state.currentBreakSeconds > remainingDiff) {
                state.currentBreakSeconds -= remainingDiff;
                remainingDiff = 0;
              } else {
                remainingDiff -= state.currentBreakSeconds;
                state.currentBreakSeconds = 0;
                state.isBreakActive = false;
              }
            } else {
              if (state.currentSeconds > remainingDiff) {
                state.currentSeconds -= remainingDiff;
                remainingDiff = 0;
              } else {
                remainingDiff -= state.currentSeconds;
                state.currentSeconds = 0;
                state.isRunning = false;
              }
            }
          }

          state.lastUpdatedAt = now;
          localStorage.setItem("timerSharedState", JSON.stringify(state));
        }
      }
    }

    return state;
  }

  // =========================
  // HOME PAGE
  // =========================
  const homeDeadlinesList = document.getElementById("homeDeadlinesList");

  if (homeDeadlinesList) {
    const homeTimerDisplay = document.getElementById("homeTimerDisplay");
    const homeBreakDisplay = document.getElementById("homeBreakDisplay");
    const homePauseTimerBtn = document.getElementById("homePauseTimerBtn");
    const homeTimerCategory = document.getElementById("homeTimerCategory");
    const themeOptions = document.getElementById("themeOptions");

    function getDaysLeft(dateString) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const target = new Date(dateString);
      target.setHours(0, 0, 0, 0);

      const diff = target - today;
      return Math.ceil(diff / (1000 * 60 * 60 * 24));
    }

    function renderHomeDeadlines() {
      const deadlineTasks = JSON.parse(localStorage.getItem("deadlineTasks")) || [];
      const deadlineCategories = JSON.parse(localStorage.getItem("deadlineCategories")) || [];

      function getCategoryById(id) {
        return deadlineCategories.find(cat => cat.id === id);
      }

      homeDeadlinesList.innerHTML = "";

      const upcoming = [...deadlineTasks]
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 3);

      if (upcoming.length === 0) {
        homeDeadlinesList.innerHTML = "<p>No deadlines yet.</p>";
        return;
      }

      upcoming.forEach(task => {
        const category = getCategoryById(task.categoryId);
        const daysLeft = getDaysLeft(task.date);

        let countdownText = "";
        if (daysLeft > 0) countdownText = `${daysLeft} days left`;
        else if (daysLeft === 0) countdownText = "Today";
        else countdownText = `${Math.abs(daysLeft)} days overdue`;

        const item = document.createElement("div");
        item.className = "home-deadline-item";

        const title = document.createElement("div");
        title.className = "home-deadline-title";
        title.textContent = task.title;

        const meta = document.createElement("div");
        meta.className = "home-deadline-meta";
        meta.textContent = `${task.date} • ${countdownText}${category ? ` • ${category.name}` : ""}`;

        item.appendChild(title);
        item.appendChild(meta);
        homeDeadlinesList.appendChild(item);
      });
    }

    function renderHomeTimer() {
      const state = getSharedTimerState();

      if (!state) {
        homeTimerCategory.textContent = "No active timer";
        homeTimerDisplay.textContent = "00:00:00";
        homeBreakDisplay.classList.add("hidden");
        return;
      }

      homeTimerCategory.textContent = state.categoryName || "Timer";
      homeTimerDisplay.textContent = formatTime(state.currentSeconds || 0);

      if (state.isBreakActive) {
        homeBreakDisplay.classList.remove("hidden");
        homeBreakDisplay.textContent = `Break: ${formatShortTime(state.currentBreakSeconds || 0)}`;
      } else {
        homeBreakDisplay.classList.add("hidden");
      }
    }

    function renderThemeOptions() {
      themeOptions.innerHTML = "";
      const currentTheme = localStorage.getItem("appTheme") || "pink";

      appThemes.forEach(theme => {
        const swatch = document.createElement("button");
        swatch.type = "button";
        swatch.className = "theme-swatch";
        if (theme.id === currentTheme) {
          swatch.classList.add("active");
        }

        swatch.style.background = `linear-gradient(135deg, ${theme.bgMain}, ${theme.accent})`;

        swatch.addEventListener("click", () => {
          applyTheme(theme.id);
          renderThemeOptions();
        });

        themeOptions.appendChild(swatch);
      });
    }

    homePauseTimerBtn.addEventListener("click", () => {
      const state = getSharedTimerState();
      if (!state) return;

      state.isRunning = false;
      state.lastUpdatedAt = Date.now();
      localStorage.setItem("timerSharedState", JSON.stringify(state));
      renderHomeTimer();
    });

    window.addEventListener("storage", () => {
      renderHomeTimer();
      renderHomeDeadlines();
      renderThemeOptions();
    });

    setInterval(renderHomeTimer, 1000);

    renderHomeDeadlines();
    renderHomeTimer();
    renderThemeOptions();
  }

  // =========================
  // LISTS PAGE
  // =========================
  const listSelect = document.getElementById("listSelect");

  if (listSelect) {
    let lists = JSON.parse(localStorage.getItem("lists")) || [
      {
        id: 1,
        name: "My List",
        items: []
      }
    ];

    let selectedListId = Number(localStorage.getItem("selectedListId")) || lists[0].id;
    let lastDeletedItem = null;
    let undoTimeout = null;

    const settingsBtn = document.getElementById("settingsBtn");
    const settingsDialog = document.getElementById("settingsDialog");
    const closeDialogBtn = document.getElementById("closeDialogBtn");
    const listsManager = document.getElementById("listsManager");
    const newListName = document.getElementById("newListName");
    const addListBtn = document.getElementById("addListBtn");
    const newItemInput = document.getElementById("newItemInput");
    const itemsList = document.getElementById("itemsList");
    const undoBtn = document.getElementById("undoBtn");

    function saveData() {
      localStorage.setItem("lists", JSON.stringify(lists));
      localStorage.setItem("selectedListId", selectedListId);
    }

    function getSelectedList() {
      return lists.find(list => list.id === selectedListId);
    }

    function renderListDropdown() {
      listSelect.innerHTML = "";
      lists.forEach(list => {
        const option = document.createElement("option");
        option.value = list.id;
        option.textContent = list.name;
        if (list.id === selectedListId) option.selected = true;
        listSelect.appendChild(option);
      });
    }

    function renderItems() {
      const selectedList = getSelectedList();
      itemsList.innerHTML = "";

      if (!selectedList) return;

      selectedList.items.forEach((item, index) => {
        const li = document.createElement("li");

        const box = document.createElement("div");
        box.className = "task-box";
        if (item.state === "partial") {
          box.classList.add("partial");
        }

        box.addEventListener("click", () => cycleItemState(index));

        const text = document.createElement("span");
        text.textContent = item.text;

        li.appendChild(box);
        li.appendChild(text);
        itemsList.appendChild(li);
      });
    }

    function renderSettings() {
      listsManager.innerHTML = "";

      lists.forEach(list => {
        const row = document.createElement("div");
        row.style.display = "flex";
        row.style.gap = "8px";
        row.style.marginBottom = "10px";

        const input = document.createElement("input");
        input.value = list.name;
        input.className = "rename-input";

        input.addEventListener("change", () => {
          list.name = input.value.trim() || "Untitled List";
          saveData();
          renderAll();
          renderSettings();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => {
          if (lists.length === 1) {
            alert("You need at least one list.");
            return;
          }

          lists = lists.filter(l => l.id !== list.id);

          if (selectedListId === list.id) {
            selectedListId = lists[0].id;
          }

          saveData();
          renderAll();
          renderSettings();
        });

        row.appendChild(input);
        row.appendChild(deleteBtn);
        listsManager.appendChild(row);
      });
    }

    function renderAll() {
      renderListDropdown();
      renderItems();
      saveData();
    }

    function addList() {
      const name = newListName.value.trim();
      if (!name) return;

      lists.push({
        id: Date.now(),
        name: name,
        items: []
      });

      newListName.value = "";
      renderAll();
      renderSettings();
    }

    function addItem() {
      const text = newItemInput.value.trim();
      if (!text) return;

      const selectedList = getSelectedList();
      if (!selectedList) return;

      selectedList.items.push({
        text: text,
        state: "empty"
      });

      newItemInput.value = "";
      renderAll();
    }

    function cycleItemState(index) {
      const selectedList = getSelectedList();
      if (!selectedList) return;

      const item = selectedList.items[index];

      if (item.state === "empty") {
        item.state = "partial";
      } else {
        lastDeletedItem = {
          item: { ...item },
          index: index,
          listId: selectedListId
        };

        selectedList.items.splice(index, 1);
        showUndo();
      }

      renderAll();
    }

    function showUndo() {
      undoBtn.classList.remove("hidden");

      clearTimeout(undoTimeout);
      undoTimeout = setTimeout(() => {
        undoBtn.classList.add("hidden");
        lastDeletedItem = null;
      }, 3000);
    }

    undoBtn.addEventListener("click", () => {
      if (!lastDeletedItem) return;

      const list = lists.find(l => l.id === lastDeletedItem.listId);
      if (!list) return;

      lastDeletedItem.item.state = "empty";
      list.items.splice(lastDeletedItem.index, 0, lastDeletedItem.item);

      undoBtn.classList.add("hidden");
      clearTimeout(undoTimeout);
      lastDeletedItem = null;
      renderAll();
    });

    listSelect.addEventListener("change", () => {
      selectedListId = Number(listSelect.value);
      renderAll();
    });

    settingsBtn.addEventListener("click", () => {
      renderSettings();
      settingsDialog.showModal();
    });

    closeDialogBtn.addEventListener("click", () => {
      settingsDialog.close();
    });

    addListBtn.addEventListener("click", addList);

    newItemInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        addItem();
      }
    });

    renderAll();
  }

  // =========================
  // DEADLINES PAGE
  // =========================
  const deadlinesList = document.getElementById("deadlinesList");

  if (deadlinesList) {
    let categories = JSON.parse(localStorage.getItem("deadlineCategories")) || [
      { id: 1, name: "Exam", color: "#ff0000" }
    ];

    let deadlineTasks = JSON.parse(localStorage.getItem("deadlineTasks")) || [];
    let editingTaskId = null;

    const addDeadlineBtn = document.getElementById("addDeadlineBtn");
    const manageCategoriesBtn = document.getElementById("manageCategoriesBtn");

    const deadlineDialog = document.getElementById("deadlineDialog");
    const deadlineDialogTitle = document.getElementById("deadlineDialogTitle");
    const deadlineDate = document.getElementById("deadlineDate");
    const deadlineTitle = document.getElementById("deadlineTitle");
    const deadlineImportant = document.getElementById("deadlineImportant");
    const deadlineCategory = document.getElementById("deadlineCategory");
    const deadlineDescription = document.getElementById("deadlineDescription");
    const saveDeadlineBtn = document.getElementById("saveDeadlineBtn");
    const deleteDeadlineBtn = document.getElementById("deleteDeadlineBtn");
    const closeDeadlineDialogBtn = document.getElementById("closeDeadlineDialogBtn");

    const categoriesDialog = document.getElementById("categoriesDialog");
    const categoriesManager = document.getElementById("categoriesManager");
    const newCategoryName = document.getElementById("newCategoryName");
    const newCategoryColor = document.getElementById("newCategoryColor");
    const addCategoryBtn = document.getElementById("addCategoryBtn");
    const closeCategoriesDialogBtn = document.getElementById("closeCategoriesDialogBtn");

    function saveDeadlineData() {
      localStorage.setItem("deadlineCategories", JSON.stringify(categories));
      localStorage.setItem("deadlineTasks", JSON.stringify(deadlineTasks));
    }

    function getDaysLeft(dateString) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const target = new Date(dateString);
      target.setHours(0, 0, 0, 0);

      const diff = target - today;
      return Math.ceil(diff / (1000 * 60 * 60 * 24));
    }

    function getCategoryById(id) {
      return categories.find(cat => cat.id === id);
    }

    function renderCategoryOptions() {
      deadlineCategory.innerHTML = "";
      categories.forEach(cat => {
        const option = document.createElement("option");
        option.value = cat.id;
        option.textContent = cat.name;
        deadlineCategory.appendChild(option);
      });
    }

    function renderCategoriesManager() {
      categoriesManager.innerHTML = "";

      categories.forEach(category => {
        const row = document.createElement("div");
        row.className = "category-row";

        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.value = category.name;

        nameInput.addEventListener("change", () => {
          category.name = nameInput.value.trim() || "Untitled";
          saveDeadlineData();
          renderCategoryOptions();
          renderCategoriesManager();
          renderDeadlineTasks();
        });

        const colorInput = document.createElement("input");
        colorInput.type = "color";
        colorInput.value = category.color;

        colorInput.addEventListener("input", () => {
          category.color = colorInput.value;
          saveDeadlineData();
          renderCategoryOptions();
          renderDeadlineTasks();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => {
          const usedByTask = deadlineTasks.some(task => task.categoryId === category.id);
          if (usedByTask) {
            alert("Delete or edit tasks using this category first.");
            return;
          }

          categories = categories.filter(cat => cat.id !== category.id);

          if (categories.length === 0) {
            categories.push({ id: Date.now(), name: "General", color: "#6666ff" });
          }

          saveDeadlineData();
          renderCategoryOptions();
          renderCategoriesManager();
          renderDeadlineTasks();
        });

        row.appendChild(nameInput);
        row.appendChild(colorInput);
        row.appendChild(deleteBtn);
        categoriesManager.appendChild(row);
      });
    }

    function renderDeadlineTasks() {
      deadlinesList.innerHTML = "";

      deadlineTasks.sort((a, b) => new Date(a.date) - new Date(b.date));

      deadlineTasks.forEach(task => {
        const category = getCategoryById(task.categoryId);

        const card = document.createElement("div");
        card.className = "deadline-card";

        if (task.important) {
          card.classList.add("important-deadline");
        }

        const header = document.createElement("div");
        header.className = "deadline-header";

        const left = document.createElement("div");
        left.className = "deadline-left";

        const title = document.createElement("h3");
        title.className = "deadline-title";
        if (task.important) title.classList.add("important");
        title.textContent = task.title;

        const meta = document.createElement("div");
        meta.className = "deadline-meta";

        const daysLeft = getDaysLeft(task.date);
        let countdownText = "";
        if (daysLeft > 0) countdownText = `${daysLeft} days left`;
        else if (daysLeft === 0) countdownText = "Today";
        else countdownText = `${Math.abs(daysLeft)} days overdue`;

        meta.textContent = `${task.date} • ${countdownText}`;

        left.appendChild(title);
        left.appendChild(meta);

        if (task.description && task.description.trim() !== "") {
          const description = document.createElement("div");
          description.className = "deadline-description";
          description.textContent = task.description;
          left.appendChild(description);
        }

        if (category) {
          const tag = document.createElement("div");
          tag.className = "category-tag";
          tag.textContent = category.name;
          tag.style.backgroundColor = category.color;
          left.appendChild(tag);
        }

        const editBtn = document.createElement("button");
        editBtn.className = "edit-btn";
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => openEditTask(task.id));

        header.appendChild(left);
        header.appendChild(editBtn);
        card.appendChild(header);
        deadlinesList.appendChild(card);
      });
    }

    function clearTaskForm() {
      deadlineDate.value = "";
      deadlineTitle.value = "";
      deadlineImportant.checked = false;
      deadlineDescription.value = "";
      if (categories.length > 0) deadlineCategory.value = categories[0].id;
      editingTaskId = null;
      deleteDeadlineBtn.classList.add("hidden");
      deadlineDialogTitle.textContent = "Add Task";
    }

    function openAddTask() {
      clearTaskForm();
      renderCategoryOptions();
      deadlineDialog.showModal();
    }

    function openEditTask(taskId) {
      const task = deadlineTasks.find(t => t.id === taskId);
      if (!task) return;

      editingTaskId = task.id;
      renderCategoryOptions();

      deadlineDate.value = task.date;
      deadlineTitle.value = task.title;
      deadlineImportant.checked = task.important;
      deadlineCategory.value = task.categoryId;
      deadlineDescription.value = task.description || "";

      deleteDeadlineBtn.classList.remove("hidden");
      deadlineDialogTitle.textContent = "Edit Task";
      deadlineDialog.showModal();
    }

    function saveTask() {
      const newTask = {
        id: editingTaskId || Date.now(),
        date: deadlineDate.value,
        title: deadlineTitle.value.trim(),
        important: deadlineImportant.checked,
        categoryId: Number(deadlineCategory.value),
        description: deadlineDescription.value.trim()
      };

      if (!newTask.date || !newTask.title) return;

      if (editingTaskId) {
        const index = deadlineTasks.findIndex(t => t.id === editingTaskId);
        deadlineTasks[index] = newTask;
      } else {
        deadlineTasks.push(newTask);
      }

      saveDeadlineData();
      renderDeadlineTasks();
      deadlineDialog.close();
      clearTaskForm();
    }

    function deleteTask() {
      if (editingTaskId === null) return;

      deadlineTasks = deadlineTasks.filter(task => task.id !== editingTaskId);
      saveDeadlineData();
      renderDeadlineTasks();
      deadlineDialog.close();
      clearTaskForm();
    }

    function addCategory() {
      const name = newCategoryName.value.trim();
      const color = newCategoryColor.value;

      if (!name) return;

      categories.push({
        id: Date.now(),
        name,
        color
      });

      newCategoryName.value = "";
      newCategoryColor.value = "#ff0000";
      saveDeadlineData();
      renderCategoryOptions();
      renderCategoriesManager();
    }

    addDeadlineBtn.addEventListener("click", openAddTask);

    manageCategoriesBtn.addEventListener("click", () => {
      renderCategoriesManager();
      categoriesDialog.showModal();
    });

    closeDeadlineDialogBtn.addEventListener("click", () => {
      deadlineDialog.close();
      clearTaskForm();
    });

    closeCategoriesDialogBtn.addEventListener("click", () => {
      categoriesDialog.close();
    });

    saveDeadlineBtn.addEventListener("click", saveTask);
    deleteDeadlineBtn.addEventListener("click", deleteTask);
    addCategoryBtn.addEventListener("click", addCategory);

    deadlineTitle.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        saveTask();
      }
    });

    deadlineDescription.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        saveTask();
      }
    });

    renderCategoryOptions();
    renderDeadlineTasks();
  }

  // =========================
  // TIMER PAGE
  // =========================
  const timerMode = document.getElementById("timerMode");

  if (timerMode) {
    let timerCategories = JSON.parse(localStorage.getItem("timerCategories")) || [
      { id: 1, name: "Study", color: "#fd61fd" }
    ];

    let savedTimerSessions = JSON.parse(localStorage.getItem("savedTimerSessions")) || [];
    savedTimerSessions = savedTimerSessions.map(session => ({
      ...session,
      date: session.date || getTodayString()
    }));

    let intervalId = null;
    let isRunning = false;
    let currentSeconds = 0;
    let totalCountdownSeconds = 0;
    let currentMode = "stopwatch";

    let pomodoroWorkSeconds = 25 * 60;
    let pomodoroBreakSeconds = 5 * 60;
    let currentBreakSeconds = 0;
    let isBreakActive = false;
    let elapsedWorkSinceBreak = 0;

    let savedTabView = "sessions";
    let statsRange = "day";
    let statsOffset = 0;

    const timerCategory = document.getElementById("timerCategory");
    const timerSavedBtn = document.getElementById("timerSavedBtn");
    const manageTimerCategoriesBtn = document.getElementById("manageTimerCategoriesBtn");
    const countdownOptions = document.getElementById("countdownOptions");
    const pomodoroMode = document.getElementById("pomodoroMode");
    const pomodoroSettings = document.getElementById("pomodoroSettings");
    const workMinutes = document.getElementById("workMinutes");
    const breakMinutes = document.getElementById("breakMinutes");
    const countdownMinutes = document.getElementById("countdownMinutes");
    const timerDisplay = document.getElementById("timerDisplay");
    const startPauseTimerBtn = document.getElementById("startPauseTimerBtn");
    const resetTimerBtn = document.getElementById("resetTimerBtn");
    const saveTimerBtn = document.getElementById("saveTimerBtn");
    const breakTimerBox = document.getElementById("breakTimerBox");
    const breakTimerText = document.getElementById("breakTimerText");
    const progressRingBar = document.getElementById("progressRingBar");
    const breakRingBar = document.getElementById("breakRingBar");

    const timerCategoriesDialog = document.getElementById("timerCategoriesDialog");
    const timerCategoriesManager = document.getElementById("timerCategoriesManager");
    const newTimerCategoryName = document.getElementById("newTimerCategoryName");
    const newTimerCategoryColor = document.getElementById("newTimerCategoryColor");
    const addTimerCategoryBtn = document.getElementById("addTimerCategoryBtn");
    const closeTimerCategoriesDialogBtn = document.getElementById("closeTimerCategoriesDialogBtn");

    const savedTimesDialog = document.getElementById("savedTimesDialog");
    const savedTimesList = document.getElementById("savedTimesList");
    const closeSavedTimesDialogBtn = document.getElementById("closeSavedTimesDialogBtn");

    const sessionsTabBtn = document.getElementById("sessionsTabBtn");
    const statsTabBtn = document.getElementById("statsTabBtn");
    const sessionsTab = document.getElementById("sessionsTab");
    const statsTab = document.getElementById("statsTab");
    const statsRangeSelect = document.getElementById("statsRangeSelect");
    const periodBackBtn = document.getElementById("periodBackBtn");
    const periodForwardBtn = document.getElementById("periodForwardBtn");
    const subPeriodBackBtn = document.getElementById("subPeriodBackBtn");
    const subPeriodForwardBtn = document.getElementById("subPeriodForwardBtn");
    const statsPeriodLabel = document.getElementById("statsPeriodLabel");
    const statsBarsList = document.getElementById("statsBarsList");
    const statsAddTimeBtn = document.getElementById("statsAddTimeBtn");
    const statsAddTimeRow = document.getElementById("statsAddTimeRow");

    const ringRadius = 90;
    const ringCircumference = 2 * Math.PI * ringRadius;
    progressRingBar.style.strokeDasharray = ringCircumference;
    progressRingBar.style.strokeDashoffset = ringCircumference;

    const breakRingRadius = 70;
    const breakRingCircumference = 2 * Math.PI * breakRingRadius;
    breakRingBar.style.strokeDasharray = breakRingCircumference;
    breakRingBar.style.strokeDashoffset = breakRingCircumference;

    function saveTimerData() {
      localStorage.setItem("timerCategories", JSON.stringify(timerCategories));
      localStorage.setItem("savedTimerSessions", JSON.stringify(savedTimerSessions));
    }

    function getTimerCategoryById(id) {
      return timerCategories.find(cat => cat.id === Number(id));
    }

    function saveSharedTimerState() {
      const category = getTimerCategoryById(timerCategory.value);

      const sharedState = {
        currentMode,
        currentSeconds,
        totalCountdownSeconds,
        isRunning,
        isBreakActive,
        currentBreakSeconds,
        categoryId: Number(timerCategory.value),
        categoryName: category ? category.name : "Timer",
        lastUpdatedAt: Date.now()
      };

      localStorage.setItem("timerSharedState", JSON.stringify(sharedState));
    }

    function syncFromSharedState() {
      const shared = getSharedTimerState();
      if (!shared) return;

      currentMode = shared.currentMode || currentMode;
      currentSeconds = Number(shared.currentSeconds) || 0;
      totalCountdownSeconds = Number(shared.totalCountdownSeconds) || 0;
      isRunning = Boolean(shared.isRunning);
      isBreakActive = Boolean(shared.isBreakActive);
      currentBreakSeconds = Number(shared.currentBreakSeconds) || 0;

      if (shared.categoryId) {
        timerCategory.value = shared.categoryId;
      }

      timerDisplay.textContent = formatTime(currentSeconds);

      if (isBreakActive) {
        breakTimerBox.classList.remove("hidden");
        breakTimerText.textContent = formatShortTime(currentBreakSeconds);
      } else {
        breakTimerBox.classList.add("hidden");
        breakTimerText.textContent = "00:00";
      }

      updateProgressRing();
      updateBreakRing();
      updateTimerAccent();
      startPauseTimerBtn.textContent = isRunning ? "Pause" : "Start";
    }

    function getDateWithOffset(daysOffset) {
      const date = new Date();
      date.setDate(date.getDate() + daysOffset);
      date.setHours(0, 0, 0, 0);
      return date;
    }

    function formatDateLabel(date) {
      return date.toISOString().split("T")[0];
    }

    function getStartOfWeek(date) {
      const copy = new Date(date);
      copy.setHours(0, 0, 0, 0);
      const day = copy.getDay();
      const diff = day === 0 ? -6 : 1 - day;
      copy.setDate(copy.getDate() + diff);
      return copy;
    }

    function getFilteredSessions() {
      if (statsRange === "all") {
        return [...savedTimerSessions];
      }

      if (statsRange === "day") {
        const selectedDate = getDateWithOffset(statsOffset);
        const target = formatDateLabel(selectedDate);
        return savedTimerSessions.filter(session => session.date === target);
      }

      if (statsRange === "week") {
        const weekDate = new Date();
        weekDate.setDate(weekDate.getDate() + statsOffset * 7);
        weekDate.setHours(0, 0, 0, 0);

        const start = getStartOfWeek(weekDate);
        const end = new Date(start);
        end.setDate(end.getDate() + 6);
        end.setHours(23, 59, 59, 999);

        return savedTimerSessions.filter(session => {
          const sessionDate = new Date(session.date);
          return sessionDate >= start && sessionDate <= end;
        });
      }

      if (statsRange === "month") {
        const now = new Date();
        const monthDate = new Date(now.getFullYear(), now.getMonth() + statsOffset, 1);
        const year = monthDate.getFullYear();
        const month = String(monthDate.getMonth() + 1).padStart(2, "0");

        return savedTimerSessions.filter(session => session.date.startsWith(`${year}-${month}`));
      }

      return [...savedTimerSessions];
    }

    function renderTimerCategories() {
      timerCategory.innerHTML = "";
      timerCategories.forEach(cat => {
        const option = document.createElement("option");
        option.value = cat.id;
        option.textContent = cat.name;
        timerCategory.appendChild(option);
      });
      updateTimerAccent();
    }

    function renderTimerCategoriesManager() {
      timerCategoriesManager.innerHTML = "";

      timerCategories.forEach(category => {
        const row = document.createElement("div");
        row.className = "category-row";

        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.value = category.name;

        nameInput.addEventListener("change", () => {
          category.name = nameInput.value.trim() || "Untitled";
          saveTimerData();
          renderTimerCategories();
          renderTimerCategoriesManager();
          renderSavedTimes();
          renderStatsBars();
          saveSharedTimerState();
        });

        const colorInput = document.createElement("input");
        colorInput.type = "color";
        colorInput.value = category.color;

        colorInput.addEventListener("input", () => {
          category.color = colorInput.value;
          saveTimerData();
          renderTimerCategories();
          renderSavedTimes();
          renderStatsBars();
          updateTimerAccent();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => {
          const usedBySaved = savedTimerSessions.some(session => session.categoryId === category.id);
          if (usedBySaved) {
            alert("Delete saved times using this category first.");
            return;
          }

          timerCategories = timerCategories.filter(cat => cat.id !== category.id);

          if (timerCategories.length === 0) {
            timerCategories.push({ id: Date.now(), name: "General", color: "#fd61fd" });
          }

          saveTimerData();
          renderTimerCategories();
          renderTimerCategoriesManager();
          renderSavedTimes();
          renderStatsBars();
        });

        row.appendChild(nameInput);
        row.appendChild(colorInput);
        row.appendChild(deleteBtn);
        timerCategoriesManager.appendChild(row);
      });
    }

    function renderSavedTimes() {
      savedTimesList.innerHTML = "";

      const filteredSessions = getFilteredSessions().sort((a, b) => b.id - a.id);

      if (filteredSessions.length === 0) {
        savedTimesList.innerHTML = "<p>No saved times for this period.</p>";
        return;
      }

      filteredSessions.forEach(session => {
        const category = getTimerCategoryById(session.categoryId);

        const row = document.createElement("div");
        row.className = "saved-session-row";
        row.style.borderLeftColor = category ? category.color : "var(--accent-soft)";

        const top = document.createElement("div");
        top.className = "saved-session-top";

        const info = document.createElement("div");

        const title = document.createElement("div");
        title.className = "saved-time-title";
        title.textContent = `${category ? category.name : "Unknown"} • ${session.mode}`;

        const sub = document.createElement("div");
        sub.className = "saved-time-sub";
        sub.textContent = `${formatTime(session.seconds)} • ${session.date}`;

        info.appendChild(title);
        info.appendChild(sub);

        const actions = document.createElement("div");
        actions.className = "saved-session-actions";

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => editSavedSession(session.id));

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.addEventListener("click", () => deleteSavedSession(session.id));

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        top.appendChild(info);
        top.appendChild(actions);
        row.appendChild(top);

        savedTimesList.appendChild(row);
      });
    }

    function deleteSavedSession(sessionId) {
      savedTimerSessions = savedTimerSessions.filter(session => session.id !== sessionId);
      saveTimerData();
      renderSavedTimes();
      renderStatsBars();
    }

    function editSavedSession(sessionId) {
      const session = savedTimerSessions.find(s => s.id === sessionId);
      if (!session) return;

      const currentMinutes = Math.round(session.seconds / 60);
      const newMinutes = prompt("Edit time in minutes:", currentMinutes);

      if (newMinutes === null) return;

      const parsedMinutes = Number(newMinutes);

      if (Number.isNaN(parsedMinutes) || parsedMinutes < 0) {
        alert("Enter a valid number of minutes.");
        return;
      }

      session.seconds = Math.round(parsedMinutes * 60);
      saveTimerData();
      renderSavedTimes();
      renderStatsBars();
    }

    function renderStatsBars() {
      statsBarsList.innerHTML = "";

      const filteredSessions = getFilteredSessions();
      const totalsByCategory = {};

      filteredSessions.forEach(session => {
        if (!totalsByCategory[session.categoryId]) {
          totalsByCategory[session.categoryId] = 0;
        }
        totalsByCategory[session.categoryId] += session.seconds;
      });

      const entries = Object.entries(totalsByCategory);

      if (entries.length === 0) {
        statsBarsList.innerHTML = "<p>No category totals for this period.</p>";
        return;
      }

      const maxSeconds = Math.max(...entries.map(entry => entry[1]));

      entries.forEach(([categoryId, totalSeconds]) => {
        const category = getTimerCategoryById(Number(categoryId));
        const color = category ? category.color : "#ff88ff";
        const name = category ? category.name : "Unknown";
        const widthPercent = maxSeconds > 0 ? (totalSeconds / maxSeconds) * 100 : 0;

        const card = document.createElement("div");
        card.className = "stats-bar-card";

        const top = document.createElement("div");
        top.className = "stats-bar-top";

        const left = document.createElement("div");
        left.textContent = name;

        const right = document.createElement("div");
        right.textContent = formatTime(totalSeconds);

        const track = document.createElement("div");
        track.className = "stats-bar-track";

        const fill = document.createElement("div");
        fill.className = "stats-bar-fill";
        fill.style.width = `${widthPercent}%`;
        fill.style.backgroundColor = color;

        track.appendChild(fill);
        top.appendChild(left);
        top.appendChild(right);
        card.appendChild(top);
        card.appendChild(track);

        statsBarsList.appendChild(card);
      });
    }

    function updateStatsPeriodLabel() {
      if (statsRange === "all") {
        statsPeriodLabel.textContent = "All Time";
        periodBackBtn.classList.add("hidden");
        periodForwardBtn.classList.add("hidden");
        subPeriodBackBtn.classList.add("hidden");
        subPeriodForwardBtn.classList.add("hidden");
        statsAddTimeRow.classList.add("hidden");
        return;
      }

      periodBackBtn.classList.remove("hidden");
      periodForwardBtn.classList.remove("hidden");
      subPeriodBackBtn.classList.remove("hidden");
      subPeriodForwardBtn.classList.remove("hidden");

      if (statsRange === "day") {
        const selectedDate = getDateWithOffset(statsOffset);
        statsPeriodLabel.textContent = formatDateLabel(selectedDate);
        statsAddTimeRow.classList.remove("hidden");
      } else if (statsRange === "week") {
        const weekDate = new Date();
        weekDate.setDate(weekDate.getDate() + statsOffset * 7);
        const start = getStartOfWeek(weekDate);
        const end = new Date(start);
        end.setDate(end.getDate() + 6);
        statsPeriodLabel.textContent = `${formatDateLabel(start)} to ${formatDateLabel(end)}`;
        statsAddTimeRow.classList.add("hidden");
      } else if (statsRange === "month") {
        const now = new Date();
        const monthDate = new Date(now.getFullYear(), now.getMonth() + statsOffset, 1);
        statsPeriodLabel.textContent = monthDate.toLocaleString("en-GB", {
          month: "long",
          year: "numeric"
        });
        statsAddTimeRow.classList.add("hidden");
      }
    }

    function setSavedTab(view) {
      savedTabView = view;

      if (view === "sessions") {
        sessionsTab.classList.remove("hidden");
        statsTab.classList.add("hidden");
        sessionsTabBtn.classList.add("active");
        statsTabBtn.classList.remove("active");
      } else {
        sessionsTab.classList.add("hidden");
        statsTab.classList.remove("hidden");
        sessionsTabBtn.classList.remove("active");
        statsTabBtn.classList.add("active");
        updateStatsPeriodLabel();
        renderStatsBars();
      }
    }

    function addManualTimeToDay() {
      if (statsRange !== "day") return;

      const minutes = prompt("How many minutes do you want to add?");
      if (minutes === null) return;

      const parsedMinutes = Number(minutes);

      if (Number.isNaN(parsedMinutes) || parsedMinutes <= 0) {
        alert("Enter a valid number of minutes.");
        return;
      }

      const selectedDate = formatDateLabel(getDateWithOffset(statsOffset));

      savedTimerSessions.push({
        id: Date.now(),
        categoryId: Number(timerCategory.value),
        mode: "manual",
        seconds: Math.round(parsedMinutes * 60),
        date: selectedDate
      });

      saveTimerData();
      renderSavedTimes();
      renderStatsBars();
    }

    function updateModeUI() {
      currentMode = timerMode.value;
      countdownOptions.style.display = currentMode === "countdown" ? "block" : "none";
      pomodoroSettings.style.display =
        currentMode === "countdown" && pomodoroMode.checked ? "block" : "none";

      stopTimer();

      if (currentMode === "stopwatch") {
        currentSeconds = 0;
        totalCountdownSeconds = 0;
        timerDisplay.textContent = "00:00:00";
        progressRingBar.style.strokeDashoffset = ringCircumference;
        breakRingBar.style.strokeDashoffset = breakRingCircumference;
        breakTimerBox.classList.add("hidden");
      } else {
        resetTimer();
      }

      updateTimerAccent();
      saveSharedTimerState();
    }

    function updateTimerAccent() {
      const category = getTimerCategoryById(timerCategory.value);
      const color = category ? category.color : "#fd61fd";
      progressRingBar.style.stroke = color;
      breakRingBar.style.stroke = color;
      timerDisplay.style.borderColor = color;
    }

    function updateProgressRing() {
      if (currentMode !== "countdown" || totalCountdownSeconds <= 0) {
        progressRingBar.style.strokeDashoffset = ringCircumference;
        return;
      }

      const progress = currentSeconds / totalCountdownSeconds;
      const offset = ringCircumference * (1 - progress);
      progressRingBar.style.strokeDashoffset = offset;
    }

    function updateBreakRing() {
      if (!isBreakActive || pomodoroBreakSeconds <= 0) {
        breakRingBar.style.strokeDashoffset = breakRingCircumference;
        return;
      }

      const progress = currentBreakSeconds / pomodoroBreakSeconds;
      const offset = breakRingCircumference * (1 - progress);
      breakRingBar.style.strokeDashoffset = offset;
    }

    function startTimer() {
      if (isRunning) return;

      if (currentMode === "countdown" && currentSeconds <= 0 && !isBreakActive) {
        totalCountdownSeconds = Number(countdownMinutes.value) * 60;
        currentSeconds = totalCountdownSeconds;
        pomodoroWorkSeconds = Number(workMinutes.value) * 60;
        pomodoroBreakSeconds = Number(breakMinutes.value) * 60;
        elapsedWorkSinceBreak = 0;
      }

      if (currentMode === "countdown" && currentSeconds <= 0 && !isBreakActive) return;

      isRunning = true;
      startPauseTimerBtn.textContent = "Pause";
      saveSharedTimerState();

      intervalId = setInterval(() => {
        if (!isRunning) return;

        if (currentMode === "stopwatch") {
          currentSeconds++;
          timerDisplay.textContent = formatTime(currentSeconds);
          saveSharedTimerState();
          return;
        }

        if (isBreakActive) {
          if (currentBreakSeconds > 0) {
            currentBreakSeconds--;
            breakTimerText.textContent = formatShortTime(currentBreakSeconds);
            updateBreakRing();
            saveSharedTimerState();
          }

          if (currentBreakSeconds <= 0) {
            isBreakActive = false;
            breakTimerBox.classList.add("hidden");
            breakRingBar.style.strokeDashoffset = breakRingCircumference;
            saveSharedTimerState();
          }

          return;
        }

        if (currentSeconds > 0) {
          currentSeconds--;
          elapsedWorkSinceBreak++;
          timerDisplay.textContent = formatTime(currentSeconds);
          updateProgressRing();
          saveSharedTimerState();
        }

        if (
          pomodoroMode.checked &&
          currentSeconds > 0 &&
          Number(workMinutes.value) > 0 &&
          Number(breakMinutes.value) > 0 &&
          elapsedWorkSinceBreak >= Number(workMinutes.value) * 60
        ) {
          isBreakActive = true;
          currentBreakSeconds = Number(breakMinutes.value) * 60;
          pomodoroBreakSeconds = Number(breakMinutes.value) * 60;
          elapsedWorkSinceBreak = 0;
          breakTimerBox.classList.remove("hidden");
          breakTimerText.textContent = formatShortTime(currentBreakSeconds);
          updateBreakRing();
          saveSharedTimerState();
          return;
        }

        if (currentSeconds <= 0) {
          currentSeconds = 0;
          timerDisplay.textContent = "00:00:00";
          updateProgressRing();
          stopTimer();
          isBreakActive = false;
          breakTimerBox.classList.add("hidden");
          breakRingBar.style.strokeDashoffset = breakRingCircumference;
          saveSharedTimerState();
        }
      }, 1000);
    }

    function stopTimer() {
      clearInterval(intervalId);
      intervalId = null;
      isRunning = false;
      startPauseTimerBtn.textContent = "Start";
      saveSharedTimerState();
    }

    function resetTimer() {
      stopTimer();

      isBreakActive = false;
      currentBreakSeconds = 0;
      elapsedWorkSinceBreak = 0;
      breakTimerBox.classList.add("hidden");
      breakTimerText.textContent = "00:00";
      breakRingBar.style.strokeDashoffset = breakRingCircumference;

      if (timerMode.value === "stopwatch") {
        currentSeconds = 0;
        totalCountdownSeconds = 0;
        timerDisplay.textContent = "00:00:00";
      } else {
        totalCountdownSeconds = Number(countdownMinutes.value) * 60;
        currentSeconds = totalCountdownSeconds;
        timerDisplay.textContent = formatTime(currentSeconds);
      }

      updateProgressRing();
      updateTimerAccent();
      saveSharedTimerState();
    }

    function saveCurrentSession() {
      const secondsToSave =
        currentMode === "stopwatch"
          ? currentSeconds
          : totalCountdownSeconds - currentSeconds;

      if (secondsToSave <= 0) return;

      savedTimerSessions.push({
        id: Date.now(),
        categoryId: Number(timerCategory.value),
        mode: currentMode,
        seconds: secondsToSave,
        date: getTodayString()
      });

      saveTimerData();
      renderSavedTimes();
      renderStatsBars();
    }

    timerMode.addEventListener("change", updateModeUI);

    timerCategory.addEventListener("change", () => {
      updateTimerAccent();
      saveSharedTimerState();
    });

    pomodoroMode.addEventListener("change", () => {
      pomodoroSettings.style.display =
        timerMode.value === "countdown" && pomodoroMode.checked ? "block" : "none";
      resetTimer();
    });

    countdownMinutes.addEventListener("change", resetTimer);
    workMinutes.addEventListener("change", resetTimer);
    breakMinutes.addEventListener("change", resetTimer);

    startPauseTimerBtn.addEventListener("click", () => {
      if (isRunning) {
        stopTimer();
      } else {
        startTimer();
      }
    });

    resetTimerBtn.addEventListener("click", resetTimer);
    saveTimerBtn.addEventListener("click", saveCurrentSession);

    manageTimerCategoriesBtn.addEventListener("click", () => {
      renderTimerCategoriesManager();
      timerCategoriesDialog.showModal();
    });

    closeTimerCategoriesDialogBtn.addEventListener("click", () => {
      timerCategoriesDialog.close();
    });

    addTimerCategoryBtn.addEventListener("click", () => {
      const name = newTimerCategoryName.value.trim();
      const color = newTimerCategoryColor.value;

      if (!name) return;

      timerCategories.push({
        id: Date.now(),
        name,
        color
      });

      newTimerCategoryName.value = "";
      newTimerCategoryColor.value = "#ff0000";
      saveTimerData();
      renderTimerCategories();
      renderTimerCategoriesManager();
      saveSharedTimerState();
    });

    timerSavedBtn.addEventListener("click", () => {
      statsRange = "day";
      statsOffset = 0;
      statsRangeSelect.value = "day";
      setSavedTab("sessions");
      updateStatsPeriodLabel();
      renderSavedTimes();
      renderStatsBars();
      savedTimesDialog.showModal();
    });

    closeSavedTimesDialogBtn.addEventListener("click", () => {
      savedTimesDialog.close();
    });

    sessionsTabBtn.addEventListener("click", () => {
      setSavedTab("sessions");
      renderSavedTimes();
    });

    statsTabBtn.addEventListener("click", () => {
      setSavedTab("stats");
    });

    statsRangeSelect.addEventListener("change", () => {
      statsRange = statsRangeSelect.value;
      statsOffset = 0;
      updateStatsPeriodLabel();
      renderSavedTimes();
      renderStatsBars();
    });

    periodBackBtn.addEventListener("click", () => {
      statsOffset--;
      updateStatsPeriodLabel();
      renderSavedTimes();
      renderStatsBars();
    });

    periodForwardBtn.addEventListener("click", () => {
      statsOffset++;
      updateStatsPeriodLabel();
      renderSavedTimes();
      renderStatsBars();
    });

    subPeriodBackBtn.addEventListener("click", () => {
      statsOffset--;
      updateStatsPeriodLabel();
      renderSavedTimes();
      renderStatsBars();
    });

    subPeriodForwardBtn.addEventListener("click", () => {
      statsOffset++;
      updateStatsPeriodLabel();
      renderSavedTimes();
      renderStatsBars();
    });

    statsAddTimeBtn.addEventListener("click", addManualTimeToDay);

    window.addEventListener("storage", () => {
      const shared = getSharedTimerState();
      if (!shared) return;

      if (shared.isRunning === false && isRunning) {
        stopTimer();
      } else {
        syncFromSharedState();
      }
    });

    renderTimerCategories();
    renderSavedTimes();
    renderStatsBars();
    updateModeUI();
    updateStatsPeriodLabel();
    syncFromSharedState();
  }
});
