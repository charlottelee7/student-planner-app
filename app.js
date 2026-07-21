document.addEventListener("DOMContentLoaded", () => {
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
});