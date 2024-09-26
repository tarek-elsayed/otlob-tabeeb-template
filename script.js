// Bootstrap form validation
(function () {
    'use strict';
    const form = document.getElementById('appointmentForm');
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        validateForm();
    }, false);

    function validateForm() {
        debugger
        let name = document.getElementById("name").value.trim();
        let mobile = document.getElementById("phone").value.trim();
        let specialty = document.getElementById("specialty").value;
        let nameError = document.getElementById("nameError");
        let mobileError = document.getElementById("mobileError");
        let specialtyError = document.getElementById("specialtyError");

        // Reset errors
        nameError.textContent = "";
        mobileError.textContent = "";
        specialtyError.textContent = "";

        let isValid = true;

        // Name validation (only letters)
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!name) {
            nameError.textContent = "الاسم مطلوب";
            isValid = false;
        } else if (!nameRegex.test(name)) {
            nameError.textContent = "Name can only contain letters";
            isValid = false;
        }

        // Mobile number validation (Egyptian and Yemeni numbers)
        const egyptianRegex = /^(010|011|012|015)[0-9]{8}$/;
        const yemeniRegex = /^(7[0-3][0-9])[0-9]{7}$/;
        if (!mobile) {
            mobileError.textContent = "رقم الهاتف مطلوب";
            isValid = false;
        } else if (!egyptianRegex.test(mobile) && !yemeniRegex.test(mobile)) {
            mobileError.textContent = "Invalid mobile number. Must be Egyptian or Yemeni";
            isValid = false;
        }

        // Specialty validation
        if (!specialty) {
            specialtyError.textContent = "يرجى تحديد التخصص الطبي";
            isValid = false;
        }
        if (isValid) {

            alert("Form submitted successfully!");
            form.classList.add('was-validated');
        }

    }
})();
