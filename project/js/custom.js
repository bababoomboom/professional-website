(function() {
	'use strict';

	var tinyslider = function() {
		var el = document.querySelectorAll('.testimonial-slider');

		if (el.length > 0) {
			var slider = tns({
				container: '.testimonial-slider',
				items: 1,
				axis: "horizontal",
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 700,
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false
			});
		}
	};
	tinyslider();

	


	var sitePlusMinus = function() {

		var value,
    		quantity = document.getElementsByClassName('quantity-container');

		function createBindings(quantityContainer) {
	      var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
	      var increase = quantityContainer.getElementsByClassName('increase')[0];
	      var decrease = quantityContainer.getElementsByClassName('decrease')[0];
	      increase.addEventListener('click', function (e) { increaseValue(e, quantityAmount); });
	      decrease.addEventListener('click', function (e) { decreaseValue(e, quantityAmount); });
	    }

	    function init() {
	        for (var i = 0; i < quantity.length; i++ ) {
						createBindings(quantity[i]);
	        }
	    };

	    function increaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        console.log(quantityAmount, quantityAmount.value);

	        value = isNaN(value) ? 0 : value;
	        value++;
	        quantityAmount.value = value;
	    }

	    function decreaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        value = isNaN(value) ? 0 : value;
	        if (value > 0) value--;

	        quantityAmount.value = value;
	    }
	    
	    init();
		
	};
	sitePlusMinus();

})()

document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");

    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener("click", function () {
            sidebar.classList.toggle("active");
            document.body.classList.toggle("sidebar-open");
        });
    }
});

document.querySelectorAll('.more-info-btn').forEach(button => {
    button.addEventListener('click', () => {
        const approvalCard = button.closest('.approval-card');
        const requestTable = approvalCard.querySelector('.request-table');

        requestTable.classList.toggle('show');

        button.textContent = requestTable.classList.contains('show')
            ? 'See Less'
            : 'See More';
    });
});

document.querySelectorAll('.accept-btn').forEach(button => {
    button.addEventListener('click', function () {

        // Find the approval card this button belongs to
        const approvalCard = this.closest('.approval-card');

        // Get all accept buttons in this card
        const allButtons = approvalCard.querySelectorAll('.accept-btn');

        // Disable and grey out all buttons
        allButtons.forEach(btn => {
            btn.disabled = true;
            btn.classList.add('disabled-btn');
        });

        // Highlight the clicked button
        this.classList.remove('disabled-btn');
        this.classList.add('accepted-btn');
        this.textContent = 'Accepted';
    });
});