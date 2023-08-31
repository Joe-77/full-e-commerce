const signBtn = document.getElementById("signBtn"),
  email = document.getElementById("email"),
  password = document.getElementById("password"),
  signIn = document.getElementById("signIn"),
  signUp = document.getElementById("signUp"),
  formReg = document.querySelector("#reg"),
  user = document.querySelector("#user"),
  registerEmail = document.getElementById("regEmail"),
  registerPass = document.getElementById("regPass"),
  sign = document.getElementById("sign"),
  Register = document.querySelector("#Register"),
  validEmail = document.querySelector("#validEmail"),
  validPass = document.querySelector("#validPass"),
  regDone = document.querySelector(".done");

const registerMail = document.querySelector(".registerMail");
const regEmail = /\w+@\w+.(com|org|net)/gi;

onerror = () => {
  return true;
};
document.getElementById("date").innerHTML = new Date().getFullYear();

function registration() {
  const myArray = JSON.parse(localStorage.getItem("myUsers")) || [];
  if (
    user.value !== "" &&
    registerEmail.value.match(regEmail) &&
    registerPass.value !== ""
  ) {
    const users = myArray.find((e) => e.email === registerEmail.value);
    if (users) {
      document.querySelector(".registerMail").classList.remove("hidden");
    } else {
      document.querySelector(".registerMail").classList.add("hidden");

      myArray.push({
        email: registerEmail.value,
        userName: user.value,
        pass: registerPass.value,
      });
    }
    localStorage.setItem("myUsers", JSON.stringify(myArray));
    if (registerMail.classList.contains("hidden")) {
      document.querySelector(".doneReg").style.display = "flex";
      document.querySelector(".doneReg").style.top = "50%";
      setTimeout(() => {
        document.querySelector(".doneReg").classList.add("rotate");
      }, 500);
      setTimeout(() => {
        document.querySelector(".doneReg").style.display = "none";
      }, 2000);
    } else {
      document.querySelector(".doneReg").style.display = "none";
    }
  }
  if (registerPass.value === "") {
    document.querySelector(".errorPass").classList.remove("hidden");
  } else {
    document.querySelector(".errorPass").classList.add("hidden");
  }
}

function register() {
  signIn.classList.add("hidden");
  formReg.classList.remove("hidden");
  signUp.innerHTML = `Register`;
}
function logIn() {
  signIn.classList.remove("hidden");
  formReg.classList.add("hidden");
  signUp.innerHTML = `Log In`;
}
function sinInBtn() {
  if (localStorage.length !== 0) {
    let data = JSON.parse(localStorage.getItem("myUsers"));
    data.forEach((e) => {
      if (email.value === e.email && password.value === e.pass) {
        window.open("home.html", "_self");
        email.value === "";
        password.value === "";
      }
      if (email.value !== e.email || email.value === "") {
        validEmail.classList.remove("hidden");
      } else {
        validEmail.classList.add("hidden");
      }
      if (password.value !== e.pass || password.value === "") {
        validPass.classList.remove("hidden");
      } else {
        validPass.classList.remove("hidden");
      }
    });
  }
}
function showMenu() {
  document.querySelector(".category").style.right = "0px";
}
function hideMenu() {
  document.querySelector(".category").style.right = "-250px";
}
function searchProduct() {
  const searchPar = document.getElementById("searchPar").value.toUpperCase(),
    product = document.querySelectorAll(".myProducts"),
    productName = document.querySelectorAll(".productName");

  for (let i = 0; i < productName.length; i++) {
    if (productName[i].innerHTML.toUpperCase().indexOf(searchPar) >= 0) {
      product[i].style.display = "";
    } else {
      product[i].style.display = "none";
    }
  }
}
function clotheTab() {
  document.querySelector(".products ").remove();

  document.querySelector(".productList").classList.remove("hidden");

  document.querySelector(".changeBackGround ").classList.remove("hidden");

  n = 1;
}
let n = 1;
function plusNum() {
  n = n + 1;
  if (n < 10) {
    document.querySelector("#numCart").textContent = `0${n}`;
  } else {
    document.querySelector("#numCart").textContent = `${n}`;
  }
}

function minusNum() {
  if (n > 1) {
    n--;

    if (n < 10) {
      document.querySelector("#numCart").textContent = `0${n}`;
    } else {
      document.querySelector("#numCart").textContent = `${n}`;
    }
  }
}

if (localStorage.key("myUsers")) {
  let myData = JSON.parse(localStorage.getItem("myUsers")) || [];
  myData.forEach((e) => {
    document.getElementById("yourName").innerHTML = `Welcome ${e.userName}`;
  });
}

function getDataFromLocalStorage() {
  let option = document.getElementById("country");
  //********************************************************************** */

  let data = JSON.parse(localStorage.getItem("cart"));

  let validEmail = /\w+@\w+.(com|org|net)/gi;

  document.getElementById("email").onkeyup = () => {
    if (document.getElementById("email").value.match(validEmail)) {
      document.querySelector(".check ").style.display = "flex";
    } else {
      document.querySelector(".check ").style.display = "none";
    }
  };

  let c = document.getElementById("cardNum");

  c.onkeyup = () => {
    if (c.value.length === 13 && c.value.match(/\d{13}/g)) {
      document.getElementById("expired").focus();
    }
  };

  document.getElementById("expired").onkeyup = () => {
    if (document.getElementById("expired").value.length === 2) {
      document.getElementById("year").focus();
    }
  };

  document.getElementById("year").onkeyup = () => {
    if (document.getElementById("year").value.length === 2) {
      document.getElementById("cvc").focus();
    }
  };

  document.getElementById("cvc").onkeyup = () => {
    if (document.getElementById("cvc").value.length === 3) {
      document.getElementById("cvc").disabled = true;
      document.getElementById("cvc").style.cursor = `no-drop`;
    }
  };

  document.getElementById("phone").onkeyup = () => {
    if (
      document.getElementById("phone").value.length === 13 &&
      document.getElementById("phone").value.match(/\d{12}/g)
    ) {
      document.getElementById("validPhone").style.display = "none";
    } else {
      document.getElementById("validPhone").style.display = "block";
    }
  };

  document.getElementById("btnPay").onclick = (e) => {
    e.preventDefault();

    if (
      document.getElementById("cvc").value !== "" &&
      document.getElementById("phone").value.match(/\d{12}/g) &&
      document.getElementById("name").value !== "" &&
      document.getElementById("email").value.match(validEmail)
    ) {
      document.getElementById("btnPay").innerHTML = "";

      document.getElementById("btnPay").innerHTML = `
      <div class="load">
      <span></span>
      <span></span>
      <span></span>
      </div>
      `;

      setTimeout(() => {
        document.getElementById(
          "btnPay"
        ).innerHTML = `<i class="text-white fa-solid fa-check"></i>`;
      }, 1500);

      setTimeout(() => {
        document.getElementById("btnPay").innerHTML = `Pay now`;
        localStorage.removeItem("cart");
        localStorage.removeItem("productsNumber");
        window.open("home.html", "_self");
      }, 2500);
    }
  };

  let sum = 0;
  let shipping = 100;
  let vat;
  data.forEach((e) => {
    sum += eval(e.salary * e.quantity);

    let div = document.createElement("div");
    div.className = `imgProducts mb-5 flex justify-between items-center`;

    let productImg = document.createElement("div");
    productImg.className = `p_Item flex gap-2 items-center`;

    let quantity = document.createElement("h2");
    quantity.innerHTML = "x" + " " + e.quantity;

    let myItem = e.img,
      name = e.name;

    productImg.innerHTML = `
    <img src="${myItem}" >
    <div>
    <h2 >${name}</h2>
    <span class='agentSalary text-xs'>${e.salary} EG</span> 
    <span class='del text-xs' id='del'><del>${
      e.salary + e.salary * 0.2
    } EG</del></span> 
    </div>
    
    `;
    div.append(productImg, quantity);

    document.querySelector(".productItem").append(div);
  });

  vat = sum * 0.02;

  document.getElementById("allTotal").innerHTML = `${sum} EG`;
  document.getElementById("shipping").textContent = `${100} EG`;
  document.getElementById("vat").textContent = `${vat} EG`;
  document.getElementById("granfTotal").textContent = `${
    sum + vat + shipping
  }  EG`;

  option.addEventListener("change", () => {
    let agentSalary = document.querySelectorAll(".agentSalary "),
      del = document.querySelectorAll(".del");

    if (option.value === "Egypt") {
      document.getElementById("city").innerHTML = `
      <option>Cairo</option>
      <option>Giza</option>
      <option>Alex</option>
      <option> Damanhur</option>
      `;

      document.getElementById("allTotal").innerHTML = `${sum} EG`;
      document.getElementById("shipping").textContent = `${shipping} EG`;
      document.getElementById("vat").textContent = `${vat} EG`;
      document.getElementById("granfTotal").textContent = `${
        sum + shipping + vat
      } EG`;

      for (let i = 0; i < agentSalary.length; i++) {
        agentSalary[i].innerHTML = `${data[i].salary} EG`;
        del[i].innerHTML = `<del>${
          data[i].salary + data[i].salary * 0.2
        } EG</del>`;
      }
    } else if (option.value === "UAE") {
      document.getElementById("city").innerHTML = `
      <option>Dubai</option>
      <option>Abu Dhabi</option>
      <option>Sharjah</option>
      <option> Al Ain</option>
      `;

      shipping = 150;

      document.getElementById("allTotal").innerHTML = `${(sum / 8.4).toFixed(
        2
      )} AED`;

      document.getElementById("shipping").textContent = `${shipping} AED`;
      document.getElementById("vat").textContent = `${(vat / 8.4).toFixed(
        2
      )} AED`;
      document.getElementById("granfTotal").innerHTML = `${(
        eval(sum + vat) / 8.4 +
        shipping
      ).toFixed(2)} AED`;

      for (let i = 0; i < agentSalary.length; i++) {
        agentSalary[i].innerHTML = `${(data[i].salary / 8.4).toFixed(2)} AED`;
        del[i].innerHTML = `<del>${(
          (data[i].salary + data[i].salary * 0.2) /
          8.4
        ).toFixed(2)} AED</del>`;
      }
    } else {
      document.getElementById("city").innerHTML = `
      <option>Abha</option>
      <option>Ad-Dilam</option>
      <option>Al-Abwa</option>
      <option>Dammam</option>
      `;

      shipping = 120;

      document.getElementById("allTotal").innerHTML = `${(sum / 8.22).toFixed(
        2
      )} SAR`;
      document.getElementById("shipping").textContent = `${shipping} SAR`;
      document.getElementById("vat").textContent = `${(vat / 8.22).toFixed(
        2
      )} SAR`;
      document.getElementById("granfTotal").textContent = `${(
        (sum + vat) / 8.22 +
        shipping
      ).toFixed(2)} SAR`;

      for (let i = 0; i < agentSalary.length; i++) {
        agentSalary[i].innerHTML = `${(data[i].salary / 8.22).toFixed(2)} SAR`;
        del[i].innerHTML = `<del>${(
          (data[i].salary + data[i].salary * 0.2) /
          8.22
        ).toFixed(2)} SAR</del>`;
      }
    }
  });
}

let x = localStorage.getItem("productsNumber") || 0;

document.getElementById("cartNumber").innerHTML = x;

// Add Data To Local Storage

function addToCart(id) {
  const myProducts = JSON.parse(localStorage.getItem("cart")) || [];

  const product = myProducts.find((product) => product.id === id);

  let quantity = eval(document.getElementById("numCart").textContent);

  let currentSalary = document
    .getElementById("myS")
    .innerHTML.replace("EG", "");

  if (product) {
    product.quantity = quantity;
    product.salary = eval(currentSalary);
  } else {
    myProducts.push({
      id: id,
      img: document.getElementById("currentImg").src,
      name: document.querySelector("#pName ").innerHTML,
      quantity: eval(document.getElementById("numCart").innerHTML),
      salary: eval(currentSalary),
    });
  }

  document.getElementById("addToCart").innerHTML = `
  <div class="load">
  <span></span>
  <span></span>
  <span></span>
  </div>
  `;

  setTimeout(() => {
    document.getElementById(
      "addToCart"
    ).innerHTML = `<span class="done"><i class="fa-solid fa-check"></i></span>`;
  }, 1000);

  setTimeout(() => {
    document.getElementById("addToCart").innerHTML = `Buy now`;

    localStorage.setItem("cart", JSON.stringify(myProducts));
    localStorage.setItem("productsNumber", myProducts.length);
    x = localStorage.getItem("productsNumber");
    document.getElementById("cartNumber").innerHTML = x;
  }, 2000);

  x = myProducts.length;
}

/*************************************************************************************************** */

let cart = document.querySelector(".cart");

cart.onclick = () => {
  if (document.getElementById("cartNumber").innerHTML !== "0") {
    window.open("cart.html", "_self");
  }
};

if (document.querySelector(".productList").classList.contains("paymentCart")) {
  getDataFromLocalStorage();
}

/*************************************************************************************************** */
function getProduct() {
  let myProducts = new XMLHttpRequest();
  myProducts.open("GET", "products.json", true);
  myProducts.send();

  myProducts.onreadystatechange = () => {
    if (myProducts.readyState === 4 && myProducts.status === 200) {
      let myArrayProducts = JSON.parse(myProducts.responseText);

      myArrayProducts.products.forEach((e) => {
        if (
          document
            .querySelector(".productList")
            .classList.contains("allProducts")
        ) {
          e.apple.forEach((x) => {
            setDataApple(x);

            // *********************************************************************************************

            // console.log(x.images[1]);
          });
          e.samsung.forEach((s) => {
            setDataApple(s);
          });

          e.lenovo.forEach((l) => {
            setDataApple(l);
          });
        }

        if (
          document
            .querySelector(".productList")
            .classList.contains("appleProducts")
        ) {
          e.apple.forEach((a) => {
            setDataApple(a);
          });
        }

        if (
          document
            .querySelector(".productList")
            .classList.contains("samsungProducts")
        ) {
          e.samsung.forEach((s) => {
            setDataApple(s);
          });
        }

        if (
          document.querySelector(".productList").classList.contains("lenovo")
        ) {
          e.lenovo.forEach((l) => {
            setDataApple(l);
          });
        }
      });
    }
  };
}

getProduct();

function setDataApple(x) {
  let mainDiv = document.createElement("div");
  mainDiv.className = `myProducts m-auto cursor-pointer`;
  mainDiv.innerHTML = `
          <div id='brand' class="text-center"> <i class='${x.logo}'></i> ${x.brand} </div>
          <img  src="${x.images[0]}" >

          <div class="salary mt-3 mb-3 flex justify-between items-center">
          <h2 class="productName text-xs">${x.name}</h2>
          <strong class="text-xs">${x.salary[0]} EG</strong>
          </div>
          <div class='btn text-center'>
          <button class="mt-3 mb-3 text-white p-2 bg-blue-700 duration-700 hover:bg-blue-950 rounded-xl text-xs text-center ">Show Product</button>
          </div>
          `;
  document.querySelector(".productList").appendChild(mainDiv);

  // *****************************************************************************************
  mainDiv.onclick = () => {
    let productsItems = document.createElement("div");
    productsItems.className = `products flex items-center  justify-between relative top-0`;
    let increment = document.createElement("div");
    increment.className = `increment`;
    let showProductsItems = document.createElement("div");
    let item = document.createElement("div");
    item.className = `add flex `;
    let storage = document.createElement("div");
    storage.className = `storage flex justify-center`;

    let productName = document.createElement("h1");
    productName.className = `text-center mb-4 text-2xl tracking-letterSpacing italic`;
    productName.id = "nameProduct";

    productName.innerHTML = `<i class='${x.logo}'></i> <span id='pName'>${x.name}</span>`;

    item.innerHTML = `
        
        <img id="currentImg" src="${x.images[0]}" >
        
        `;

    let imgDiv = document.createElement("div");
    imgDiv.className = `imgDiv flex flex-col  gap-4 justify-center`;

    for (let i = 0; i < x.images.length; i++) {
      let img = document.createElement("img");
      img.src = x.images[i];
      img.onclick = () => {
        document.getElementById("currentImg").src = `${x.images[i]}`;
      };
      imgDiv.append(img);
      item.appendChild(imgDiv);
    }

    increment.innerHTML = `
<div class=" flex justify-around items-center numAndSalary">
<div class='addAndMinus flex justify-between select-none'>
<span class="cursor-pointer" id='minus' onclick="minusNum()">-</span>
<span class="cursor-pointer" id='numCart'>0${n}</span>
<span class="cursor-pointer" id='add' onclick="plusNum()">+</span>
</div>
<strong id='myS'>${x.salary[0]} EG</strong>
</div>
<div class='btn m-auto'>
<button class='w-full rounded-xl text-white p-2 bg-blue-700 hover:bg-blue-950 duration-700' onclick='addToCart(${x.id})' id="addToCart" >Buy now</button>
</div>
<i onclick="clotheTab()" class="clotheTab fa-solid fa-x"></i>
`;

    // console.log(x.images[0]);

    let storageSpaces = document.createElement("div");
    storageSpaces.className = "storageSpaces flex gap-4 flex-wrap";

    for (let i = 0; i < x.storage.length; i++) {
      storageSpaces.innerHTML += `
      <span data-number='${i}' class='spaces cursor-pointer select-none'>${x.storage[i]}</span>
      `;
    }

    storage.append(storageSpaces);

    document.querySelector(".productList").classList.add("hidden");

    document.querySelector(".changeBackGround ").classList.add("hidden");

    showProductsItems.append(productName, item, increment);

    productsItems.append(showProductsItems, storage);

    document.querySelector(".container").appendChild(productsItems);

    let s = document.querySelectorAll(".spaces");

    s.forEach((e) => {
      s[0].classList.add("active");
      e.onclick = () => {
        s.forEach((x) => {
          x.classList.remove("active");
        });
        e.classList.toggle("active");
        document.getElementById("myS").innerHTML = `${
          x.salary[e.getAttribute("data-number")]
        } EG`;
      };
    });

    //******* */
  };
}
