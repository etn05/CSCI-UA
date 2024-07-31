document.addEventListener("DOMContentLoaded", function() {
    const dayOfWeek = new Date().getDay();
    quoteElement = document.getElementById("quote");

    if (dayOfWeek === 0) {
        quoteElement.textContent = "'In Vietnamese, the word for missing someone and remembering them is the same: nhớ. Sometimes, when you ask me over the phone, Có nhớ mẹ không? I flinch, thinking you meant, Do you remember me? ...I miss you more than I remember you. -Ocean Vuong'";
    } else if (dayOfWeek === 1) {
        quoteElement.textContent = "'Thân em thì trắng phận em tròn, Bảy nổi ba chìm mấy nước non. Rắn nát mặc dầu tay kẻ nặn, Mà em vẫn giữ tấm lòng son.' -Hồ Xuân Hương";
    } else if (dayOfWeek === 2) {
        quoteElement.textContent = "'Trong làn nắng ửng: khói mơ tan, Đôi mái nhà tranh lấm tấm vàng. Sột soạt gió trêu tà áo biếc, Trên giàn thiên lí. Bóng xuân sang.' -Hàn Mặc Tử";
    } else if (dayOfWeek === 3) {
        quoteElement.textContent = "'Tôi hỏi: người là phiên bản thứ mấy của Im Lặng?' -Nhã Thuyên";
    } else if (dayOfWeek === 4) {
        quoteElement.textContent = "'You who will emerge from the flood / In which we have gone under / Remember / When you speak of our failings / The dark time too / Which you have escaped' - Bertolt Brecht";
    } else if (dayOfWeek === 5) {
        quoteElement.textContent = "'I walk on bridges connecting two alien shores' -Phan Nhien Hao";
    } else if (dayOfWeek === 6) {
        quoteElement.textContent = "'At sunrise, I have gathered: The breakages of a child growing up during war, a contempt of ostentatious games, the enduring loneliness of a wandering exile, a half Western-half Vietnamese knowledge' - Phan Nhien Hao";
    } else {
        quoteElement.textContent = "'A shout is a prayer for the waiting centuries' -Thanh Tam Tuyen";
    }

    document.addEventListener("click", function(event) {
         target = event.target;

    if (target.id === "history1" || target.id === "reflections") {
           target.style.color = "#f22e2e";
        }
    });


    document.addEventListener("click", function(event) {
        target = event.target;

   if (target.id === "image1" || target.className === "image") {
          target.style.transform = "rotate(90deg)";
       }
   });

    //CSS DOM Query 
      document.querySelector('#OC1').onclick = function() {
        this.style.color = "#f22e2e";
    }

    document.querySelector('#history1').onclick = function() {
        this.style.color = "#f22e2e";
    }

    document.querySelector('#reflections').onclick = function() {
        this.style.color = "#f22e2e";
}

    
    //HTML DOM Query
    document.getElementById("image1").onclick = function() {
        this.style.transform = "rotate(90deg)";
    };

    document.getElementsByClassName("image").onclick = function() {
        this.style.transform = "rotate(90deg)";
    };

    
}); 

// mobile navigation svg script

document.querySelector('.nav-icon').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('active');
});