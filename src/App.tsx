import './styles/home.css';


export default function App() {
  return (
    <>
      <nav id="navbar" className="navbar navbar-expand-lg bg-primary fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Welcome to my Portfolio!</a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#tabs" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="tabs">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link active" href="#about">About Me</a></li>
                    <li className="nav-item"><a className="nav-link active" href="#education">Education</a></li>
                    <li className="nav-item"><a className="nav-link active" href="#projects">Projects</a></li>
                    <li className="nav-item"><a className="nav-link active" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <main className="container-sm mt-5" data-bs-spy="scroll" data-bs-target="#navbar" tabIndex={0}>
        
        <section id="about">
            <img className="rounded shadow float-end m-3" width="300" src="/profilepic.jpeg" alt="Family Photo" />

            <h2 className="h2 mb-3">About Me</h2>

            <p className="mb-3">Hi, I'm Dexter Davenport, a 21-year-old software engineering student and family man. I graduated from
                American Leadership Academy in 2019 and started my higher education journey at Chandler-Gilbert
                Community College before transferring to Brigham Young University-Idaho. I'm on track to graduate in
                April 2023 with a Bachelor's degree in Software Engineering, which I'm very excited about.</p>

            <p className="mb-3">Aside from my academic pursuits, I'm also an Eagle Scout, having achieved this milestone at the young
                age of 13. I've always been passionate about learning new things and challenging myself, which is
                why I enjoy activities like mountain biking and playing musical instruments. However, my greatest
                source of joy comes from spending time with my wife and son. They inspire me to work hard and be the
                best version of myself.</p>

            <p>I'm eager to apply my skills and knowledge to real-world challenges and make a positive impact on the
                world. As you explore my portfolio, I hope you'll get a sense of my dedication, creativity, and
                passion for software engineering. Thank you for taking the time to get to know me.</p>
        </section>

        <section id="education">
            <h2 className="h2 mb-3">Education</h2>

            <ul>
                <li>
                    <h3>Bachelor of Science in Software Engineering with a Minor in Computer Information Technology</h3>
                    <p>Brigham Young University-Idaho, expected graduation: April 2023</p>
                </li>
                <li>
                    <h3>Certificate in Quality Assurance</h3>
                    <p>Received: April 2023</p>
                </li>
                <li>
                    <h3>Certificate in Computer Programming</h3>
                    <p>Received: April 2023</p>
                </li>
            </ul>
        </section>

        <section id="projects">
            <h2>Projects</h2>

            <ul>
                <li>
                    <h3>dexterdavenport.com - HTML, CSS, JavaScript (Always In Progress)</h3>
                    <p>This website serves as my portfolio, where you can discover information about me, including my
                        education, current projects, and work experience. Notably, this website has been entirely coded
                        from scratch.
                    </p>
                </li>
                <li>
                    <h3>Calendar App - Flutter (In Progress)</h3>
                    <p>This is a cross-platform application that enables users to create events that can be accessed
                        from any device. Additionally, each event comes with an associated text file that allows users
                        to take notes for the event.
                    </p>
                </li>
                <li>
                    <h3>Wordle Solver - Python (Complete)</h3>
                    <p>This Python script is designed to help users solve the New York Times game Wordle by using a
                        comprehensive list of five-letter words and the provided information to progressively refine the
                        list until the correct word is found.
                    </p>
                </li>
            </ul>
        </section>

        <section id="work">
            <h2>Work History</h2>
            <ul>
                <li>
                    <h3>Junior Software Developer Intern</h3>
                    <h4>Somewhat Simple, January 2023 - Present</h4>
                    <p>In my role as a Junior Software Developer Intern, I have the exciting responsibility of
                        developing, maintaining, and supporting a mobile application for somwhatsimple.com, an online
                        blog dedicated to providing insightful and helpful content to its readers.</p>
                    <p>As a developer, I work to ensure that the mobile application is functioning optimally and meet
                        the needs of the users. This includes developing new features and functionalities, improving the
                        user interface, and fixing any bugs or glitches that may arise. In addition, I work to keep the
                        applications up-to-date with the latest mobile technologies and trends, so that our users always
                        have the best experience possible.</p>

                </li>
                <li>
                    <h3>Dialer</h3>
                    <h4>Venture Data, October 2020 - December 2021</h4>
                    <p>As a Dialer at Venture Data, my main responsibility is to conduct phone interviews with
                        individuals and record their responses accurately. I was expected to maintain a professional
                        demeanor and follow established survey scripts while engaging with respondents.</p>

                    <p>To succeed in this role, I had to have excellent communication skills, be able to work
                        independently and manage my time effectively, and be comfortable using a computer to record
                        data. Additionally, I had to be detail-oriented, organized, and able to remain professional in
                        challenging situations. Our goal at Venture Data was to provide high-quality data to our
                        clients, and we relied on our Dialers to play a critical role in achieving that goal.</p>

                </li>
                <li>
                    <h3>Pool Cleaner</h3>
                    <h4>Coconut Pools, October 2019 - June 2020</h4>
                    <ul>
                        <p>As a Pool Cleaner at Coconut Pools, my main responsibility was to clean and maintain our
                            clients' pools. This involves skimming debris, vacuuming the pool, balancing the water
                            chemistry, and inspecting and maintaining pool equipment.</p>

                        <p>To be successful in this role, I had to be detail-oriented, able to work independently, and
                            have a strong work ethic.</p>
                    </ul>
                </li>
                <li>
                    <h3>Home Inspectors Assistant</h3>
                    <h4>National Property Inspections, March 2019 - August 2019</h4>
                    <p>As a Home Inspector's Assistant, my main responsibility was to assist with assessing the
                        condition of the interior of homes and creating a detailed report for clients. During
                        inspections, I conducted thorough assessments of various areas of the home, taking detailed
                        notes and photographs, and making recommendations for any necessary repairs or upgrades.</p>

                    <p>To be successful in this role, I needed to have a strong attention to detail, be able to work
                        independently, and have excellent communication skills. I also needed to have a solid
                        understanding of residential building systems and be comfortable using technology to document
                        and report my findings. Providing accurate information to clients was important, and I took
                        pride in delivering a professional and detailed report that could help them make informed
                        decisions about the properties they were considering.</p>
                </li>
                <li>
                    <h3>Floor Worker</h3>
                    <h4>Walmart, October 2018 - March 2019</h4>
                    <p>As a Walmart Floor Worker, I was responsible for keeping the produce, bakery, and meat sections
                        fully stocked and organized. This involved unloading deliveries, checking for quality, and
                        rotating items to ensure freshness. I also assisted with pricing and labeling products, and made
                        sure that displays were eye-catching and appealing to customers.</p>

                    <p>In addition to stocking, I was also responsible for assisting customers with any needs they had
                        in my section. I helped customers find products, answered their questions, and provided
                        recommendations. I made sure that the areas were clean and free of clutter, and alerted my
                        manager of any issues or concerns. Overall, my goal was to provide excellent customer service
                        and ensure that my sections were fully stocked and organized at all times.</p>
                </li>
            </ul>
        </section>
        <section id="contact">
            <h2>Contact Me</h2>
            <p>Email: dexterldavenport@gmail.com</p>
            <p>Phone Number: (480) 561-8469</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2023 Dexter Davenport</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossOrigin="anonymous"></script>
    </>
  )
}