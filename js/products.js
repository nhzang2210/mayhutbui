// Mảng products
var products = [
    {
        id: 1,
        img: "../img/samsung/cam-tay-samsung-vs15a6031r1-sv-600x600.jpg",
        imgindex: "img/samsung/cam-tay-samsung-vs15a6031r1-sv-600x600.jpg",
        title: "Máy hút bụi Samsung VS15A6031R1/SV",
        price: "5,200,000 VND",
        price_sale: "4,700,000 VND",
        power: "1000W",
        brush_rotation: "360 độ",
        speed: "3 cấp độ",
        noise_level: "60 dB",
        brand: "samsung",quantity: 0 

    },
    {
        id: 2,
        img: "../img/samsung/may-hut-bui-samsung-vcc8835v37-xsv-1-300x300.jpg",
        imgindex: "img/samsung/may-hut-bui-samsung-vcc8835v37-xsv-1-300x300.jpg",
        title: "Máy hút bụi Samsung vcc8835v37/SV",
        price: "5,300,000 VND",
        price_sale: "4,800,000 VND",
        power: "1200W",
        brush_rotation: "360 độ",
        speed: "2 cấp độ",
        noise_level: "65 dB",
        brand: "samsung",quantity: 0 
    },
    {
        id: 3,
        img: "../img/samsung/samsung-vc18m21m0vn-sv-n-300x300.jpg",
        imgindex: "img/samsung/samsung-vc18m21m0vn-sv-n-300x300.jpg",
        title: "Máy hút bụi Samsung vc18m21m0vn/SV",
        price: "4,800,000 VND",
        price_sale: "4,300,000 VND",
        power: "800W",
        brush_rotation: "180 độ",
        speed: "2 cấp độ",
        noise_level: "70 dB",
        brand: "samsung",quantity: 0 
    },
    {
        id: 4,
        img: "../img/samsung/samsung-vcc8836v36-xsv-1.-600x600.jpg",
        imgindex: "img/samsung/samsung-vcc8836v36-xsv-1.-600x600.jpg",
        title: "Máy hút bụi Samsung vcc8836v36/SV",
        price: "5,400,000 VND",
        price_sale: "4,900,000 VND",
        power: "1500W",
        brush_rotation: "360 độ",
        speed: "3 cấp độ",
        noise_level: "68 dB",
        brand: "samsung", quantity: 0
    },
    {
        id: 5,
        img: "../img/samsung/samsung-vs03r6523j1-sv-1-600x600.jpg",
        imgindex: "img/samsung/samsung-vs03r6523j1-sv-1-600x600.jpg",
        title: "Máy hút bụi Samsung vs03r6523j1/SV",
        price: "5,100,000 VND",
        price_sale: "4,600,000 VND",
        power: "1100W",
        brush_rotation: "360 độ",
        speed: "3 cấp độ",
        noise_level: "62 dB",
        brand: "samsung", quantity: 0
    },
    {
        id: 6,
        img: "../img/derrma/cam-tay-deerma-dx115c-300x300.jpg",
        imgindex: "img/derrma/cam-tay-deerma-dx115c-300x300.jpg",
        title: "Máy hút bụi Deerma dx115c/SV",
        price: "4,700,000 VND",
        price_sale: "4,200,000 VND",
        power: "900W",
        brush_rotation: "180 độ",
        speed: "2 cấp độ",
        noise_level: "65 dB",
        brand: "deerma", quantity: 0
    },
    {
        id: 7,
        img: "../img/derrma/cam-tay-deerma-dx700s-1.-600x600.jpg",
        imgindex: "img/derrma/cam-tay-deerma-dx700s-1.-600x600.jpg",
        title: "Máy hút bụi Deerma vs03r6523j1/SV",
        price: "4,900,000 VND",
        price_sale: "4,400,000 VND",
        power: "1000W",
        brush_rotation: "360 độ",
        speed: "3 cấp độ",
        noise_level: "70 dB",
        brand: "deerma", quantity: 0
    },
    {
        id: 8,
        img: "../img/derrma/dem-giuong-deerma-cm1300-1-300x300.jpg",
        imgindex: "img/derrma/dem-giuong-deerma-cm1300-1-300x300.jpg",
        title: "Máy hút bụi Deerma vs03r6523j1/SV",
        price: "5,000,000 VND",
        price_sale: "4,500,000 VND",
        power: "1200W",
        brush_rotation: "360 độ",
        speed: "2 cấp độ",
        noise_level: "68 dB",
        brand: "deerma", quantity: 0
    },
    {
        id: 9,
        img: "../img/derrma/may-hut-bui-cam-tay-deerma-dx118c-pro-251023-033910-600x600.jpg",
        imgindex: "img/derrma/may-hut-bui-cam-tay-deerma-dx118c-pro-251023-033910-600x600.jpg",
        title: "Máy hút bụi Deerma vs03r6523j1/SV",
        price: "5,100,000 VND",
        price_sale: "4,600,000 VND",
        power: "1300W",
        brush_rotation: "360 độ",
        speed: "3 cấp độ",
        noise_level: "64 dB",
        brand: "deerma", quantity: 0
    },
    {
        id: 10,
        img: "../img/hitachi/hitachi-cv-bf16-gn-240522-095951-600x600.jpg",
        imgindex: "img/hitachi/hitachi-cv-bf16-gn-240522-095951-600x600.jpg",
        title: "Máy hút bụi Hitachi vs03r6523j1/SV",
        price: "5,000,000 VND",
        price_sale: "4,500,000 VND",
        power: "950W",
        brush_rotation: "360 độ",
        speed: "2 cấp độ",
        noise_level: "63 dB",
        brand: "hitachi", quantity: 0
    },
    {
        id: 11,
        img: "../img/hitachi/hitachi-cv-sh18e-bl-050522-042834-600x600.jpg",
        imgindex: "img/hitachi/hitachi-cv-sh18e-bl-050522-042834-600x600.jpg",
        title: "Máy hút bụi Hitachi vs03r6523j1/SV",
        price: "5,200,000 VND",
        price_sale: "4,700,000 VND",
        power: "1050W",
        brush_rotation: "360 độ",
        speed: "3 cấp độ",
        noise_level: "67 dB",
        brand: "hitachi", quantity: 0
    },
    {
        id: 12,
        img: "../img/hitachi/may-hut-bui-cong-nghiep-hitachi-cv-940y-24cv-wr-220323-120044-600x600.jpg",
        imgindex: "img/hitachi/may-hut-bui-cong-nghiep-hitachi-cv-940y-24cv-wr-220323-120044-600x600.jpg",
        title: "Máy hút bụi Hitachi vs03r6523j1/SV",
        price: "5,300,000 VND",
        price_sale: "4,800,000 VND",
        power: "1100W",
        brush_rotation: "360 độ",
        speed: "3 cấp độ",
        noise_level: "66 dB",
        brand: "hitachi", quantity: 0
    },
    {
        id: 13,
        img: "../img/hitachi/may-hut-bui-khong-day-hitachi-pv-x80m-101022-042030-600x600.jpg",
        imgindex: "img/hitachi/may-hut-bui-khong-day-hitachi-pv-x80m-101022-042030-600x600.jpg",
        title: "Máy hút bụi Hitachi vs03r6523j1/SV",
        price: "5,000,000 VND",
        price_sale: "4,500,000 VND",
        power: "1000W",
        brush_rotation: "360 độ",
        speed: "3 cấp độ",
        noise_level: "68 dB",
        brand: "hitachi", quantity: 0
    },
    {
        id: 14,
        img: "../img/panasonic/may-hut-bui-dang-hop-panasonic-mc-cl601an49-110423-035002-600x600.jpg",
        imgindex: "img/panasonic/may-hut-bui-dang-hop-panasonic-mc-cl601an49-110423-035002-600x600.jpg",
        title: "Máy hút bụi Panasonic vs03r6523j1/SV",
        price: "5,400,000 VND",
        price_sale: "4,900,000 VND",
        power: "850W",
        brush_rotation: "180 độ",
        speed: "2 cấp độ",
        noise_level: "63 dB",
        brand: "panasonic", quantity: 0
    },
    {
        id: 15,
        img: "../img/panasonic/may-hut-bui-dang-hop-panasonic-mc-cl605kn49-150523-100851-600x600.jpg",
        imgindex: "img/panasonic/may-hut-bui-dang-hop-panasonic-mc-cl605kn49-150523-100851-600x600.jpg",
        title: "Máy hút bụi Panasonic vs03r6523j1/SV",
        price: "5,500,000 VND",
        price_sale: "5,000,000 VND",
        power: "950W",
        brush_rotation: "360 độ",
        speed: "3 cấp độ",
        noise_level: "67 dB",
        brand: "panasonic", quantity: 0
    },
    {
        id: 16,
        img: "../img/panasonic/panasonic-mc-cg371an46-daidien-300x300.jpg",
        imgindex: "img/panasonic/panasonic-mc-cg371an46-daidien-300x300.jpg",
        title: "Máy hút bụi Panasonic vs03r6523j1/SV",
        price: "5,600,000 VND",
        price_sale: "5,100,000 VND",
        power: "1000W",
        brush_rotation: "360 độ",
        speed: "2 cấp độ",
        noise_level: "64 dB",
        brand: "panasonic", quantity: 0
    },
    {
        id: 17,
        img: "../img/panasonic/may-hut-bui-dang-hop-panasonic-mc-cl601an49-110423-035002-600x600.jpg",
        imgindex: "img/panasonic/may-hut-bui-dang-hop-panasonic-mc-cl601an49-110423-035002-600x600.jpg",
        title: "Máy hút bụi Panasonic vs03r6523j1/SV",
        price: "5,400,000 VND",
        price_sale: "4,900,000 VND",
        power: "1200W",
        brush_rotation: "360 độ",
        speed: "3 cấp độ",
        noise_level: "70 dB",
        brand: "panasonic", quantity: 0
    }
];




document.addEventListener("DOMContentLoaded", function () {
    updateCartItemCount();
    var container = document.getElementById("product-container");
    var productsPerPage = 8;
    var productsDisplayed = 0;

    // Function to display products
    function displayProducts(startIndex) {
        for (var i = startIndex; i < Math.min(products.length, startIndex + productsPerPage); i++) {
            var product = products[i];
            var productHTML = `
                <div class="col-3 mt-2">
                    <div class="container cotSanPham">
                        <div class="khungAnh">
                            <a href="html/product_detail.html?id=${product.id}"><img src="${product.imgindex}" alt="${product.title}"></a>
                            <a class="themvaogiohang btn" href="#" onclick="addToCart(${product.id})">Thêm vào giỏ hàng</a>
                        </div>
                        <div class="khungAnh-content">
                            <a href="html/product_detail.html?id=${product.id}"><h3 class="title">${product.title}</h3></a>
                            <span class="price">${product.price_sale} <del class="price_sale">${product.price}</del></span>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += productHTML;
        }
        // Update the number of products displayed
        productsDisplayed += productsPerPage;

        // Hide "Xem thêm" button if all products are displayed
        if (productsDisplayed >= products.length) {
            loadMoreButton.style.display = "none";
        }
    }

    // Call the function to display initial products
    displayProducts(0);

    // Function to handle "Xem thêm" button click
    var loadMoreButton = document.getElementById("load-more-button");
    loadMoreButton.addEventListener("click", function () {
        displayProducts(productsDisplayed);
    });

    var productId = getUrlParameter('id');
    var product = products.find(p => p.id === parseInt(productId));

    if (product) {
        var productDetailsContainer = document.getElementById('product-details-container');
        var productHTML = `
            <div>
                <img src="${product.imgindex}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p>Giá: ${product.price}</p>
                <p>Giá khuyến mãi: ${product.price_sale}</p>
            </div>
        `;
        productDetailsContainer.innerHTML = productHTML;
    } else {
        // Handle the case when product is not found
        var productDetailsContainer = document.getElementById('product-details-container');
        productDetailsContainer.innerHTML = "<p>Sản phẩm không tồn tại.</p>";
    }

});

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}



// Lưu thông tin giỏ hàng vào Local Storage
    function addToCart(productId) {
        var product = products.find(p => p.id === productId);
        if (product) {
            // Lấy danh sách sản phẩm từ localStorage
            var cart = JSON.parse(localStorage.getItem('cart')) || [];
            
            // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
            var existingProduct = cart.find(item => item.id === productId);
            if (existingProduct) {
                // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng lên 1
                existingProduct.quantity += 1;
            } else {
                // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm vào giỏ hàng với số lượng là 1
                product.quantity = 1;
                cart.push(product);
            }
            
            // Lưu danh sách sản phẩm vào localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
            
            // Cập nhật số lượng sản phẩm trong giỏ hàng
            updateCartItemCount();
            
            alert("Sản phẩm đã được thêm vào giỏ hàng.");
        } else {
            alert("Sản phẩm không tồn tại.");
        }
    }

    function updateCartItemCount() {
        // Lấy danh sách sản phẩm từ localStorage
        var cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Cập nhật số lượng sản phẩm trong giỏ hàng
        var cartItemCount = cart.length;

        // Hiển thị số lượng sản phẩm trên biểu tượng giỏ hàng
        var cartItemCountElement = document.getElementById("cart-item-count");
        cartItemCountElement.textContent = cartItemCount;
    }



function displayProductsByBrand(brandName) {
    // Lọc các sản phẩm theo nhãn hiệu
    var filteredProducts = products.filter(product => product.brand === brandName);

    // Hiển thị các sản phẩm tương ứng
    displayProducts(filteredProducts);
}

function displayProducts(products) {
    // Xóa các sản phẩm hiện có trước khi hiển thị sản phẩm mới
    var container = document.getElementById("product-container");
    container.innerHTML = '';

    // Hiển thị các sản phẩm mới
    products.forEach(product => {
        var productHTML = ` 
            <div class="col-3 mt-2">
                <div class="container cotSanPham">
                    <div class="khungAnh">
                        <a href="html/product_detail.html?id=${product.id}"><img src="${product.imgindex}" alt="${product.title}"></a>
                        <a class="themvaogiohang btn" href="#" onclick="addToCart(${product.id})">Thêm vào giỏ hàng</a>
                    </div>
                    <div class="khungAnh-content">
                        <a href="html/product_detail.html?id=${product.id}"><h3 class="title">${product.title}</h3></a>
                        <span class="price">${product.price_sale} <del class="price_sale">${product.price}</del></span>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productHTML;
    });
}
document.addEventListener("DOMContentLoaded", function() {
    // Lọc sản phẩm khuyến mãi
    var hotSaleProducts = products.filter(product => product.price_sale);

    // Hiển thị danh sách sản phẩm khuyến mãi
    displayHotSaleProducts(hotSaleProducts);
});

function displayHotSaleProducts(products) {
    var khuyenMaiHotContainer = document.querySelector('.khuyenmaihot');

    products.forEach(function(product) {
        // Tạo phần tử HTML cho mỗi sản phẩm
        var productHTML = `
        <div class="col-3 mt-2">
        <div class="container cotSanPham">
            <div class="khungAnh">
                <a href="product_detail.html?id=${product.id}"><img src="${product.img}" alt="${product.title}"></a>
                <a class="themvaogiohang btn" href="#" onclick="addToCart(${product.id})">Thêm vào giỏ hàng</a>
            </div>
            <div class="khungAnh-content">
                <a href="product_detail.html?id=${product.id}"><h3 class="title">${product.title}</h3></a>
                <p class="temp1"><img src="../img/anhChiTietSP/image.png" alt=""> <span>GIÁ SỐC CUỐI TUẦN</span></p>
                <span class="price">${product.price_sale} <del class="price_sale">${product.price}</del></span>
            </div>
        </div>
    </div>
        `;

        // Thêm sản phẩm vào phần khuyenmaihot
        khuyenMaiHotContainer.innerHTML += productHTML;
    });
}








