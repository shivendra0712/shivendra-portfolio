
const toggleBtn = document.getElementById("themeToggle");
const lightIcon = document.querySelector(".lightIcon");
const darkIcon = document.querySelector(".darkIcon");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    console.log(body.classList);
    
    if (body.classList.contains("dark")) {
        body.classList.remove("dark", "bg-gray-900", "text-white");
        body.classList.add("bg-[rgb(227,227,227)]", "text-black");
        lightIcon.classList.remove("hidden");
        darkIcon.classList.add("hidden");
    } else {
        body.classList.add("dark", "bg-gray-900", "text-white");
        body.classList.remove("bg-[rgb(227,227,227)]", "text-black");
        lightIcon.classList.add("hidden");
        darkIcon.classList.remove("hidden");
    }
});

