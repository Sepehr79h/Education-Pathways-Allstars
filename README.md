<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ECE444-2022Fall/project-1-web-application-design-education-pathways-group-16-all-stars">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Education Pathways</h3>

  <p align="center">
    Group 16 - All Stars
    <br />
    <a href="https://github.com/ECE444-2022Fall/project-1-web-application-design-education-pathways-group-16-all-stars"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="images/Demo">View Demo</a>
    ·
    <a href="https://github.com/ECE444-2022Fall/project-1-web-application-design-education-pathways-group-16-all-stars/issues">Report Bug</a>
    ·
    <a href="https://github.com/ECE444-2022Fall/project-1-web-application-design-education-pathways-group-16-all-stars/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#project-management-tools">Project Management Tools</a>
    </li>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- Project Management Tools -->
## Project Management Tools

- Github Projects

<!-- ABOUT THE PROJECT -->
## About The Project

[Education Pathways](https://education-pathways-allstars.herokuapp.com/)

Education Pathways by Group 16 ECE444-2022Fall. A tool to help UofT students find their prefered courses.
<div align="center">
  <a href="https://github.com/ECE444-2022Fall/project-1-web-application-design-education-pathways-group-16-all-stars">
      <img src="images/Frontend.png" alt="Logo" width="1000vw" height="auto">
    </a>
</div>

This web application is designed to help organize and display courses to help students view a catalog of courses the University of Toronto offers.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![React][React.js]][React-url]
* [Flask](https://flask.palletsprojects.com/en/2.2.x/)
* [MongoDB](https://www.mongodb.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running, follow these simple example steps.

### Prerequisites


* npm
  ```sh
  npm install npm@latest -g
  ```

### Local Run

1. Clone the repo

   ```sh
   git clone https://github.com/ECE444-2022Fall/project-1-web-application-design-education-pathways-group-16-all-stars.git
   ```

2. Install NPM packages

   ```sh
   cd Education_Pathways/frontend
   npm install
   ```

3. Change Frontend `.env`

    Update frontend  `.env` to change url to `http://localhost:5000`

4. Run Frontend

   ```bash
   npm start
   ```

5. Install Python Dependecies

    ```bash
    pip install -r requirements.txt
    ```

6. Run Backend

    In `/Education_Pathways`

    ```bash
    export FLASK_APP=index.py
    flask run  ```
<!-- USAGE EXAMPLES -->
## Usage

The project has multiple features:

Homepage Search:

<div align="center">
  <a href="https://github.com/ECE444-2022Fall/project-1-web-application-design-education-pathways-group-16-all-stars">
      <img src="images/search2.png" alt="Logo" width="1000vw" height="auto">
    </a>
</div>

Course Packages:

<div align="center">
  <a href="https://github.com/ECE444-2022Fall/project-1-web-application-design-education-pathways-group-16-all-stars">
      <img src="images/CoursePackages.png" alt="Logo" width="1000vw" height="auto">
    </a>
</div>

Course List:

<div align="center">
  <a href="https://github.com/ECE444-2022Fall/project-1-web-application-design-education-pathways-group-16-all-stars">
      <img src="images/CourseList1.png" alt="Logo" width="1000vw" height="auto">
    </a>
</div>

<div align="center">
  <a href="https://github.com/ECE444-2022Fall/project-1-web-application-design-education-pathways-group-16-all-stars">
      <img src="images/CourseList2.png" alt="Logo" width="1000vw" height="auto">
    </a>
</div>

Course Description Page:

<div align="center">
  <a href="https://github.com/ECE444-2022Fall/project-1-web-application-design-education-pathways-group-16-all-stars">
      <img src="images/coursedes1.png" alt="Logo" width="1000vw" height="auto">
    </a>
</div>

<div align="center">
  <a href="https://github.com/ECE444-2022Fall/project-1-web-application-design-education-pathways-group-16-all-stars">
      <img src="images/coursedes2.5.png" alt="Logo" width="1000vw" height="auto">
    </a>
</div>

<div align="center">
  <a href="https://github.com/ECE444-2022Fall/project-1-web-application-design-education-pathways-group-16-all-stars">
      <img src="images/coursedes3.5.png" alt="Logo" width="1000vw" height="auto">
    </a>
</div>

<div align="center">
  <a href="https://github.com/ECE444-2022Fall/project-1-web-application-design-education-pathways-group-16-all-stars">
      <img src="images/coursedes4.5.png" alt="Logo" width="1000vw" height="auto">
    </a>
</div>

<div align="center">
  <a href="https://github.com/ECE444-2022Fall/project-1-web-application-design-education-pathways-group-16-all-stars">
      <img src="images/coursedes2.png" alt="Logo" width="1000vw" height="auto">
    </a>
</div>

<div align="center">
  <a href="https://github.com/ECE444-2022Fall/project-1-web-application-design-education-pathways-group-16-all-stars">
      <img src="images/coursedes3.png" alt="Logo" width="1000vw" height="auto">
    </a>
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Local DB

In the case that the website has slow performance due to the DB, the DB can be run locally to fix performance.

To Run mongoDB instance locally, first generate a binary dump of the database using the `monogodump` utility

Then

```bash
# Start Local Databse
docker run --name mongo-local -d mongo:latest
# Point Backend to local darabse, in index.py
DB_URI = "mongodb://localhost:27017/A-Star"
# Restore Data in local database
mongorestore mongodb://localhost:27017 ~/dump
```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/ECE444-2022Fall/project-1-web-application-design-education-pathways-group-16-all-stars/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

See [Contributing](https://github.com/ECE444-2022Fall/project-1-web-application-design-education-pathways-group-16-all-stars/blob/main/Contribution.md)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

ECE444 Group 16 - All Stars - ece444group16@gmail.com

Project Link: [https://github.com/ECE444-2022Fall/project-1-web-application-design-education-pathways-group-16-all-stars](https://github.com/ECE444-2022Fall/project-1-web-application-design-education-pathways-group-16-all-stars)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/ECE444-2022Fall/project-1-web-application-design-education-pathways-group-16-all-stars.svg?style=for-the-badge
[contributors-url]: https://github.com/ECE444-2022Fall/project-1-web-application-design-education-pathways-group-16-all-stars/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ECE444-2022Fall/project-1-web-application-design-education-pathways-group-16-all-stars.svg?style=for-the-badge
[forks-url]: https://github.com/ECE444-2022Fall/project-1-web-application-design-education-pathways-group-16-all-stars/network/members
[stars-shield]: https://img.shields.io/github/stars/ECE444-2022Fall/project-1-web-application-design-education-pathways-group-16-all-stars.svg?style=for-the-badge
[stars-url]: https://github.com/ECE444-2022Fall/project-1-web-application-design-education-pathways-group-16-all-stars/stargazers
[issues-shield]: https://img.shields.io/github/issues/ECE444-2022Fall/project-1-web-application-design-education-pathways-group-16-all-stars.svg?style=for-the-badge
[issues-url]: https://github.com/ECE444-2022Fall/project-1-web-application-design-education-pathways-group-16-all-stars/issues
[license-shield]: https://img.shields.io/github/license/ECE444-2022Fall/project-1-web-application-design-education-pathways-group-16-all-stars.svg?style=for-the-badge
[license-url]: https://github.com/ECE444-2022Fall/project-1-web-application-design-education-pathways-group-16-all-stars/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
