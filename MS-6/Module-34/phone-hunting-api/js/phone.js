const loadPhone = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhone(phones);
};

const displayPhone = (phones) => {
  const phoneContainer = document.getElementById("phone-container")
  phoneContainer.textContent = ``
  
  // display show all button if there are more than 12
  const showAllContainer = document.getElementById('show-all-container')
  phones.length > 12 ? showAllContainer.classList.remove("hidden") : showAllContainer.classList.add("hidden")
  
  // display only first 10 phones
  phones = phones.slice(0,12)

  phones.forEach((phone) => {
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card w-96 bg-gray-100 shadow-xl`;
    phoneCard.innerHTML = `
      <figure class="pt-10"><img src=${phone.image} alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    `;
    phoneContainer.appendChild(phoneCard)
  });
  toggleLoadingSpinner(false);
};

//handle search button
const handleSearch = () =>{
  toggleLoadingSpinner(true);
  const searchInput = document.getElementById("search-input")
  const searchText = searchInput.value
  loadPhone(searchText)
  
  searchInput.value = ''
}

const toggleLoadingSpinner = (isLoading) =>{
  const loadingSpinner = document.getElementById("loading-spinner")
  if(isLoading){
    loadingSpinner.classList.remove('hidden')
  }
  else{
    loadingSpinner.classList.add('hidden')
  }
  
}