interface User {
  name: string;
  avatar: string;
}

const users: User[] = [
  { name: "Charlie", avatar: "C" },
  { name: "Diana", avatar: "D" },
];

const newMsgBtn = document.getElementById("newMsgBtn") as HTMLButtonElement;
const openNewMsg = document.getElementById("openNewMsg") as HTMLButtonElement;
const newMsgModal = document.getElementById("newMsgModal") as HTMLDivElement;
const closeModal = document.getElementById("closeModal") as HTMLButtonElement;
const userList = document.getElementById("userList") as HTMLDivElement;
const modalSearch = document.getElementById("modalSearch") as HTMLInputElement;

function renderUserList(list: User[]) {
  userList.innerHTML = list
    .map(
      (u) => `
      <div class="bg-gray-700 p-2 rounded-xl hover:bg-gray-600 cursor-pointer flex items-center space-x-2">
        <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center font-semibold">${u.avatar}</div>
        <span>${u.name}</span>
      </div>
    `
    )
    .join("");
}

function openModal(): void {
  newMsgModal.classList.remove("hidden");
  renderUserList(users);
  modalSearch.value = "";
}

function closeModalHandler(): void {
  newMsgModal.classList.add("hidden");
}

function filterUsers(event: Event): void {
  const input = (event.target as HTMLInputElement).value.toLowerCase();
  const filtered = users.filter((u) => u.name.toLowerCase().includes(input));
  renderUserList(filtered);
}

newMsgBtn?.addEventListener("click", openModal);
openNewMsg?.addEventListener("click", openModal);
closeModal?.addEventListener("click", closeModalHandler);
modalSearch?.addEventListener("input", filterUsers);
