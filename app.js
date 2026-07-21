document.addEventListener("DOMContentLoaded", () => {
  const listSelect = document.getElementById("listSelect");

  if (!listSelect) return;

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
});