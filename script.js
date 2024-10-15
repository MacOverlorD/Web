@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap');

html {
    scroll-behavior: smooth;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    border: none;
    outline: none;
    font-family: 'Poppins', sans-serif;
}

html{
    font-size: 62.5%;
}

body{
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    background-color: rgb(0, 0, 0);
    color: white;
}

header{
    margin-top: 20px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 9%;
    background-color: transparent;
    filter: drop-shadow(10px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
}

.logo{
    font-size: 3rem;
    color: #b74b4b;
    font-weight: 800;
    cursor: pointer;
    transition: 0.5s ease;
}

.logo:hover{
    transform: scale(1.1);
}

nav a{
    font-size: 1.8rem;
    color: white;
    margin-left: 4rem;
    font-weight: 500;
    transition: 0.3s ease;
    border-bottom: 3px solid transparent;
}

nav a:hover,
nav a.active{
    color: #b74b4b;
    border-bottom: 3px solid #b74b4b;
}

@media(max-width:995px){
    nav{
        position: absolute;
        display: none;
        top: 0;
        right: 0;
        width: 40%;
        border-left: 3px solid #b74b4b;
        border-bottom: 3px solid #b74b4b;
        border-bottom-left-radius: 2rem;
        padding: 1rem solid;
        background-color: #404040;
        border-top: 0.1rem solid rgba(0,0,0,0.1);
    }

    nav.active{
        display: block;
    }

    nav a{
        display: block;
        font-size: 2rem;
        margin: 1rem 0; /* Reduce the margin to 1rem for tighter spacing */
        padding: 1rem; /* Add padding for better touch target size */
        border-radius: 0.5rem;
        border-bottom: 0.2rem solid #b74b4b; /* Make border smaller */
    }

    nav a:hover,
    nav a.active{
        padding: 1rem;
        border-radius: 0.5rem;
        border-bottom: 0.5rem solid #b74b4b;
    }
}

section{
    min-height: 100vh;
    padding: 5rem 9% 5rem;
    padding-top: 7rem;
}

.home{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8rem;
}

.home .home-content h1{
    font-size: 6rem;
    font-weight: 700;
    line-height: 1.3;
}

span{
    color: #b74b4b;
}

.home-content h3{
    font-size: 4rem;
    margin-bottom: 1rem;
    font-weight: 700;
}

.home-content p{
    font-size: 1.6rem;
}

.home-img{
    border-radius: 50%;
}

.home-img img{
    position: relative;
    width: 32vw;
    border-radius: 50%;
    box-shadow: 0 0 25px solid #b74b4b;
    cursor: pointer;
    transition: 0.2s linear;
}

.home-img img:hover{
    font-size: 1.8rem;
    font-weight: 500;
}

.social-icons a{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    background-color: transparent;
    border: 0.2rem solid #b74b4b;
    font-size: 2rem;
    border-radius: 50%;
    margin: 3rem 1.5rem 3rem 0;
    transition: 0.3s ease;
    color: #b74b4b;
}

.social-icons a:hover{
    color: black;
    transform: scale(1.3) translateY(-5px);
    background-color: #b74b4b;
    box-shadow: 0  0 25px #b74b4b;
}

.btn{
    display: inline-block;
    padding: 1rem 2.8rem;
    background-color: black;
    border-radius: 4rem;
    font-size: 1.6rem;
    color: #b74b4b;
    letter-spacing: 0.3rem;
    font-weight: 600;
    border: 2px solid #b74b4b;
    transition: 0.3s ease;
    cursor: pointer;
}

.btn:hover{
    transform: scale3d(1.03);
    background-color: #b74b4b;
    color: black;
    box-shadow: 0 0 25px #b74b4b;
}

.typing-text{
    font-size: 34px;
    font-weight: 600;
    min-width: 280px;
}

.typing-text span{
    position: relative;
}

@media (max-width: 1000px){
    .home{
        gap: 4rem;
    }
}

@media(max-width:995px){
    .home{
        flex-direction: column;
        margin: 5rem 4rem;
    }

    .home .home-content h3{
        font-size: 2.5rem;
    }

    .home-content h1{
        font-size: 5rem;
    }

    .home-img img{
        width: 70vw;
        margin-top: 4rem;
    }
}

.Aboutme-content h1 {
    font-size: 2.5rem; /* Adjust this value for a larger font size */
    line-height: 1.5; /* Improves readability with proper line spacing */
}

.Aboutme-content {
    padding-left: 30px; /* Keeps the padding between image and text */
    text-align: left;
}

.Aboutme {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
}

.Aboutme .home-img {
    flex: 1; /* Ensures the image takes up available space */
}

.Aboutme .home-img img {
    width: 50%; /* Adjust the image size as needed */
    height: auto;
    object-fit: cover;
    border-radius: 10px; /* Optional rounded corners */
    margin-right: 20px; /* Add space between the image and text */
}

@media (max-width: 600px) {
    .home-img img {
        width: 50vw; /* Smaller size for very small screens */
    }
    
    .Aboutme .home-img img {
        width: 80%; /* Adjust the image size for about section */
    }
}

.Aboutme-content {
    flex: 1; /* Ensures the text takes up available space */
    text-align: left; /* Align text to the left side */
    padding-left: 30px; /* Adds spacing between image and text */
}

#education {
    text-align: center;
    padding: 50px 0;
}

.education-container {
    display: flex;
    justify-content: center; /* Centers the items horizontally */
    align-items: flex-start; /* Aligns items at the top */
    flex-wrap: wrap; /* Ensures wrapping on smaller screens */
    gap: 150px; /* Reduces space between items */
}

.education-item {
    flex: 1 1 300px; /* Makes items more flexible and narrower */
    max-width: 300px; /* Ensures items don’t stretch too wide */
    text-align: center;
}

.education-item img {
    width: 100%; /* Makes the image fill the width of the container */
    height: auto; /* Maintains the image's aspect ratio */
    aspect-ratio: 1/1; /* Ensures a square shape */
    object-fit: cover; /* Ensures the image covers the container without distortion */
    border-radius: 10px; /* Adds rounded corners for aesthetics */
    margin-bottom: 10px;
}

.education-item h3 {
    font-size: 2.5rem; /* Increase the font size for bigger text */
    font-weight: bold; /* Make the text bolder */
    margin-top: 10px; /* Adds space between the image and the text */
}

#education h1 {
    font-size: 3em; /* Adjust the size as needed */
    font-weight: bold; /* Optional: make it bold */
    text-align: center; /* Optional: center-align the text */
}

#skill {
    text-align: center;
    padding: 50px 0;
}

.skill-container {
    display: flex;
    justify-content: center; /* Centers the items horizontally */
    align-items: flex-start; /* Aligns items at the top */
    flex-wrap: wrap; /* Ensures wrapping on smaller screens */
    gap: 50px; /* Reduces space between items */
}

.skill-item {
    flex: 1 1 120px; /* Makes items flexible */
    max-width: 120px; /* Ensures items don’t stretch too wide */
    text-align: center;
    display: flex; /* Flexbox for centering */
    flex-direction: column; /* Stack items vertically */
    justify-content: center; /* Center items vertically */
    align-items: center; /* Center items horizontally */
}

.skill-item img {
    width: 100%; /* Makes the image fill the width of the container */
    height: auto; /* Maintains the image's aspect ratio */
    aspect-ratio: 1/1; /* Ensures a square shape */
    object-fit: cover; /* Ensures the image covers the container without distortion */
    border-radius: 10px; /* Adds rounded corners for aesthetics */
    margin-bottom: 10px;
}

.skill-item h3 {
    font-size: 1.5rem; /* Font size for the text */
    font-weight: bold;
    margin-top: 10px;
}

.skill-item h2 {
    font-size: 2.8rem; /* Increase the font size for bigger text */
    font-weight: bold; /* Make the text bolder */
    margin-top: 10px; /* Adds space between the image and the text */
}

#skill h1 {
    font-size: 3em; /* Adjust the size as needed */
    font-weight: bold; /* Optional: make it bold */
    text-align: center; /* Optional: center-align the text */
}

/* Interest Section Styles */
#interest {
    background-color: #000000; /* Light background */
    padding: 50px 0; /* Spacing around the section */
    text-align: center;
}

#interest h2 {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 30px;
    color: #ffffff; /* Dark text color */
}

.interest-container {
    display: flex;
    justify-content: space-around; /* Evenly space out items */
    flex-wrap: wrap; /* Allow items to wrap on smaller screens */
    gap: 20px; /* Space between items */
}

.interest-item {
    background-color: #fff; /* White background for each item */
    border: 1px solid #ddd; /* Light border */
    border-radius: 10px; /* Rounded corners */
    padding: 20px;
    width: 30%; /* Each item takes 30% width of the container */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    transition: transform 0.3s ease-in-out; /* Smooth hover effect */
}

.interest-item:hover {
    transform: scale(1.05); /* Slightly enlarge on hover */
}

.interest-item img {
    width: 100%; /* Make the images fit the container */
    height: auto;
    border-radius: 10px; /* Rounded corners for images */
}

.interest-item h3 {
    font-size: 24px;
    font-weight: 500;
    margin-top: 15px;
    color: #333; /* Text color */
}

@media (max-width: 768px) {
    .interest-item {
        width: 45%; /* Make items take 45% of the width on smaller screens */
    }
}

@media (max-width: 576px) {
    .interest-item {
        width: 100%; /* Full width on very small screens */
    }
}

#contact {
    padding: 50px 0;
    background-color: #202020;
    color: white;
    text-align: center;
}

.contact-left {
    margin-bottom: 30px;
}

.contact-left h1.sub-title {
    font-size: 3rem;
    margin-bottom: 20px;
    color: #b74b4b;
    font-weight: bold;
}

.contact-left p {
    font-size: 1.8rem;
    margin: 10px 0;
    line-height: 1.5;
}

.contact-right form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.contact-right form input, .contact-right form textarea {
    width: 100%;
    max-width: 500px;
    padding: 15px;
    font-size: 1.6rem;
    border-radius: 8px;
    border: 2px solid #b74b4b;
    background-color: #404040;
    color: white;
    outline: none;
    transition: 0.3s ease;
}

.contact-right form input:focus, .contact-right form textarea:focus {
    border-color: white;
}

.contact-right form button {
    padding: 15px 30px;
    font-size: 1.6rem;
    font-weight: 600;
    background-color: #b74b4b;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s ease;
}

.contact-right form button:hover {
    background-color: white;
    color: #b74b4b;
}

.social-icons {
    margin-top: 30px;
}

.social-icons a {
    display: inline-block;
    margin: 0 10px;
    font-size: 2.5rem;
    color: #b74b4b;
    transition: 0.3s ease;
}

.social-icons a:hover {
    color: white;
    transform: scale(1.2);
}

@media (max-width: 768px) {
    .contact-left, .contact-right {
        text-align: center;
    }

    .contact-right form {
        width: 100%;
    }
}

.wolf-btn {
    display: inline-block;
    padding: 12px 24px;
    background-color: #ff9800; /* A vibrant color to make it stand out */
    color: white; /* White text for contrast */
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    border: 2px solid transparent;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.wolf-btn:hover {
    background-color: white; /* Invert the colors on hover */
    color: #ff9800;
    border: 2px solid #ff9800;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Add shadow for depth */
    transform: scale(1.05); /* Slightly enlarge the button on hover */
}

/* Add a nice animation effect */
.wolf-btn:active {
    transform: scale(0.98); /* Make it slightly smaller when clicked */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Reduce shadow on click */
}

/* Back-to-top button */
.back-to-top-btn {
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    background-color: #ff9800;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    display: none; /* Hidden by default */
    font-size: 18px;
}

.back-to-top-btn:hover {
    background-color: #555;
}

/* Navigation bar for larger screens */
header nav {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
}

header nav a {
    font-size: 18px;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
}

header nav a:hover,
header nav a.active {
    color: #ff9800;
}

/* Default hidden state for navigation on mobile */
nav {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
}

@media only screen and (max-width: 768px) {
    nav {
        display: none; /* Hidden by default */
        position: absolute;
        top: 60px;
        right: 0;
        width: 100%;
        background-color: #333;
        text-align: center;
        flex-direction: column;
    }

    /* Show navigation when .active class is added */
    nav.active {
        display: flex;
    }

    nav a {
        display: block;
        padding: 15px;
        background-color: #000;
        color: white;
        border-bottom: 1px solid #ddd;
        text-align: center;
        width: 100%;
    }

    nav a:hover {
        background-color: #555;
    }

    /* Mobile hamburger icon */
    .mobile-menu-icon {
        display: block;
        position: absolute;
        top: 15px;
        right: 20px;
        font-size: 30px;
        cursor: pointer;
    }
}
