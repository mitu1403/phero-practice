const loadPhone = async (searchText=13, isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhone(phones, isShowAll);
};

const displayPhone = (phones, isShowAll) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.textContent = ``;

  // display show all button if there are more than 12
  const showAllContainer = document.getElementById("show-all-container");
  phones.length > 12 && !isShowAll
    ? showAllContainer.classList.remove("hidden")
    : showAllContainer.classList.add("hidden");
  // if(phones.length > 12 && !isShowAll){
  //   showAllContainer.classList.remove("hidden")
  // }
  // else{
  //   showAllContainer.classList.add("hidden")
  // }

  // display only first 10 phones
  if (!isShowAll) {
    phones = phones.slice(0, 12);
  }

  phones.forEach((phone) => {
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card w-96 bg-gray-100 shadow-xl`;
    phoneCard.innerHTML = `
      <figure class="pt-10"><img src=${phone.image} alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <div class="card-actions justify-center">
          <button class="btn btn-primary" onclick="handleShowDetail('${phone.slug}')">Show Details</button>
        </div>
      </div>
    `;
    phoneContainer.appendChild(phoneCard);
  });
  toggleLoadingSpinner(false);
};

//handle search button
const handleSearch = (isShowAll) => {
  toggleLoadingSpinner(true);
  const searchInput = document.getElementById("search-input");
  const searchText = searchInput.value;
  loadPhone(searchText, isShowAll);

  // searchInput.value = ''
};

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};

// handle showAll
const handleShowAll = () => {
  handleSearch(true);
};

const handleShowDetail = async (id) => {
  // load single phone data
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const data = await res.json();
  const phoneDetail = data.data;
  showPhoneDetails(phoneDetail);
};

const showPhoneDetails = (detail) => {
  show_detail_modal.showModal()
  console.log(detail)
  const modal = document.getElementById("show_detail_modal")
  modal.innerHTML = `
    <form method="dialog" class="modal-box bg-white">
      <img src=${detail.image} class="mx-auto mb-5">
      <h3 class="font-bold text-lg">${detail?.name}</h3>
      <p class="py-4"><b>Storage: </b>${detail?.mainFeatures?.storage}</p>
      <p class="py-4"><b>DIsplay Size: </b>${detail?.mainFeatures?.displaySize}</p>
      <p class="py-4"><b>Chipset: </b>${detail?.mainFeatures?.chipSet}</p>
      <p class="py-4"><b>Memory: </b>${detail?.mainFeatures?.memory}</p>
      <p class="py-4"><b>Release Date: </b>${detail?.releaseDate || '--'}</p>
      <p class="py-4"><b>Brand: </b>${detail?.brand}</p>
      <div class="modal-action">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </div>
    </form>

  `

};

loadPhone()