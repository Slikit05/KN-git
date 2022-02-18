(function () {
	let btnBurger = document.querySelector(".burger"),
		btnCity = document.querySelector("[data-city-modal]"),
		modalWindow = document.querySelector("[data-city-window]"),
		mobileMenu = document.querySelector("[data-mobile-menu]"),
		parentLi = document.querySelector("#items"),
		filter = document.querySelector("#filter"),
		overlayWindow = document.querySelector(".overlay"),
		searchBlock = document.querySelector("[data-search-site]");

	btnBurger.addEventListener("click", function () {
		if (mobileMenu.classList.contains("mobile-menu--open")) {
			mobileMenu.classList.remove("mobile-menu--open");
			overlayWindow.style.display = "none";
		} else {
			mobileMenu.classList.add("mobile-menu--open");
			overlayWindow.style.display = "block";
		}
	});

	btnCity.addEventListener("click", function () {
		if (modalWindow.classList.contains("modal-window--open")) {} else {
			modalWindow.classList.add("modal-window--open");
			overlayWindow.style.display = "block";
		}
	});

	document.addEventListener("click", function (event) {
		if (event.target.hasAttribute("data-close-menu")) {
			mobileMenu.classList.remove("mobile-menu--open");
			overlayWindow.style.display = "none";
		} else if (event.target.hasAttribute("data-close-city")) {
			modalWindow.classList.remove("modal-window--open");
		} else if (event.target.hasAttribute("data-show-search")) {
			searchBlock.classList.add("search-for-site--open");
			overlayWindow.style.display = "block";
		} else if (event.target.hasAttribute("data-close-search")) {
			searchBlock.classList.remove("search-for-site--open");
			overlayWindow.style.display = "none";
		} else if (event.target.classList.contains("overlay")) {
			searchBlock.classList.remove("search-for-site--open");
			modalWindow.classList.remove("modal-window--open");
			mobileMenu.classList.remove("mobile-menu--open");
			overlayWindow.style.display = "none";
		} else if(event.target.classList.contains("wrap-icon-play")) {
			let videoBlocks = document.querySelectorAll(".wrap-icon-play");
			let videoBlock = event.target.closest(".wrap-video").querySelector("[data-video]");			

			if(videoBlock.paused) {
				videoBlocks.forEach(function(item) {
					if(item.closest(".wrap-video").querySelector(".wrap-icon-play").style.display = "none") {
						item.closest(".wrap-video").querySelector(".wrap-icon-play").style.display = "flex";
						item.closest(".wrap-video").querySelector("[data-video]").pause();
						item.closest(".wrap-video").querySelector("[data-video]").currentTime = 0;
						item.closest(".wrap-video").querySelector("[data-video]").controls = false;
					};
				});	
				event.target.closest(".wrap-video").querySelector(".wrap-icon-play").style.display = "none";
				videoBlock.play();
				videoBlock.controls = true;
			}
		}
	});

	function filterItems(event) {
		// Получаем фразу для поиска и переводим ее в нижний регистр
		var searchedText = event.target.value.toLowerCase();
		
		// 1. Получаем список всех задач
		var items = parentLi.querySelectorAll("li");
	
		// 2. Перебор циклом
		items.forEach(function(item) {
			// Получаем текст задачи из списка и переводим в нижний регистр
			var itemText = item.firstChild.textContent.toLowerCase();
	
			// Проверяем вхождение искомой подстроки в текст задачи
			if ( itemText.indexOf(searchedText) != -1 ) {
				// Если вхождение есть - показываем элемент с задачей
				item.style.display = "block";
			} else {
				// Если вхождения нет - скрываем элемент с задачей
				item.style.display = "none";
			};
		});
	};

	filter.addEventListener("keyup", filterItems);

})();


(function () {
  window.addEventListener("click", function (event) {

    if (event.target.dataset.clickModal) {
      event.preventDefault();

      const btnName = event.target.dataset.clickModal;

      document.querySelector("#" + btnName).classList.add("modal--open");
      document.querySelector("html").classList.add("hiden");
    };

    if (event.target.classList.contains("modal__overlay")) {
      event.target.closest(".modal").classList.remove("modal--open");
      document.querySelector("html").classList.remove("hiden");
    } else if (event.target.classList.contains("close")) {
      event.target.closest(".modal").classList.remove("modal--open");
      document.querySelector("html").classList.remove("hiden");
      if (document.querySelector(".event-text")) {
        document.querySelector(".event-text").innerHTML = "";
        document.querySelector(".event-text").classList.remove("event-text--change");
      }
    };
  });
})();