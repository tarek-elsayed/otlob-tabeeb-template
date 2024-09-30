// Bootstrap form validation
(function () {
    'use strict';
    const form = document.getElementById('appointmentForm');
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.stopPropagation();
        }
        event.preventDefault();
        validateForm();
    }, false);

    function validateForm() {

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


    document.addEventListener('DOMContentLoaded', function() {
        const testimonials = [
            {
                name: "محمد زيد",
                text: "هذا النص هو مثال للنص يمكن أن يستبدل في نفس المساحة. لقد تم توليد هذا النص من مولد النص العربي.",
                image: "./img/avtar.jpg",
                rating: 4,
                website: "www.yourwebsite.com"
            },
            {
                name: "أحمد علي",
                text: "مثال آخر للنصوص العربية. هذا نص تجريبي لتوضيح كيف يمكن أن يعمل العرض الديناميكي للتقييمات.",
                image: "./img/avtar.jpg",
                rating: 5,
                website: "www.anotherwebsite.com"
            },
            {
                name: "سارة محمد",
                text: "تجربة رائعة ومفيدة جداً. سوف أنصح الجميع بالتجربة!",
                image: "./img/avtar.jpg",
                rating: 3,
                website: "www.example.com"
            }
        ];
        
        // العنصر الذي سيتم عرض المحتوى فيه
        const testimonialContainer = document.getElementById('testimonial');
        
        // متغير لتعقب التقييم الحالي
        let currentTestimonial = 0;
        
        // وظيفة لعرض التقييم بناءً على الفهرس الحالي
        function displayTestimonial(index) {
            const { name, text, image, rating, website } = testimonials[index];
            
            // إنشاء الـ HTML ديناميكيًا
            document.getElementById('testimonial').innerHTML = `
                <div class="profile">
                    <img src="${image}" alt="${name}" class="profile-image">
                </div>
                <h3>${name}</h3>
                <p>${text}</p>
                <div class="rating1">
                    ${generateStars(rating)}
                </div>
                <p class="website">${website}</p>
            `;
        }
        
        // وظيفة لتوليد النجوم بناءً على التقييم
        function generateStars(rating) {
            let starsHtml = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= rating) {
                    starsHtml += '<span class="star filled"><i class="fa-solid fa-star"></i></span>';
                } else {
                    starsHtml += '<span class="star"><i class="fa-regular fa-star"></i></span>';
                }
            }
            return starsHtml;
        }
        
        // عرض أول تقييم عند تحميل الصفحة
        displayTestimonial(currentTestimonial);
        
        // أزرار التنقل بين التقييمات
        document.getElementById('nextBtn').addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            displayTestimonial(currentTestimonial);
        });
        
        document.getElementById('prevBtn').addEventListener('click', () => {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            displayTestimonial(currentTestimonial);
        });
        
    })
})();
