document.addEventListener('DOMContentLoaded', () => {
    const profileContent = document.getElementById('profile-content');
    const connectContent = document.getElementById('connect-content');
    const roadmapContent = document.getElementById('roadmap-content');
    const chatContent = document.getElementById('chat-content');

    profileContent.innerHTML = `
        <h3>Your Profile</h3>
        <p>Name: John Doe</p>
        <p>Semester: 2nd</p>
        <p>Branch: Computer Science</p>
    `;

    connectContent.innerHTML = `
        <h3>Seniors Available for Guidance</h3>
        <div class="senior">
            <p>Name: Jane Smith</p>
            <p>Branch: Computer Science</p>
            <p>Expertise: Web Development</p>
            <p>Email: <a href="mailto:jane.smith@example.com">jane.smith@example.com</a></p>
        </div>
        <div class="senior">
            <p>Name: Mark Johnson</p>
            <p>Branch: Electrical Engineering</p>
            <p>Expertise: Embedded Systems</p>
            <p>Email: <a href="mailto:mark.johnson@example.com">mark.johnson@example.com</a></p>
        </div>
    `;

    roadmapContent.innerHTML = `
        <h3>Roadmap</h3>
        <p>Semester 1: Basics of programming, Introduction to algorithms</p>
        <p>Semester 2: Data Structures, Object-Oriented Programming</p>
        <p>Semester 3: Database Management, Web Development Basics</p>
        <p>Semester 4: Advanced Algorithms, Mobile Development</p>
        <p>Semester 5: Machine Learning, Software Engineering</p>
        <p>Semester 6: Cloud Computing, DevOps</p>
        <p>Semester 7: Internships, Capstone Projects</p>
        <p>Semester 8: Advanced Topics, Job Preparation</p>
    `;

    chatContent.innerHTML = `
        <h3>All Chat</h3>
        <div class="chat-post">
            <p><strong>John Doe:</strong> Just finished my first project!</p>
            <button>Like</button>
        </div>
        <div class="chat-post">
            <p><strong>Jane Smith:</strong> Looking for tips on JavaScript frameworks.</p>
            <button>Like</button>
        </div>
        <div class="chat-post">
            <p><strong>Mark Johnson:</strong> Anyone interested in a study group for embedded systems?</p>
            <button>Like</button>
        </div>
        <div class="chat-post">
            <textarea placeholder="Write a post..."></textarea>
            <button>Post</button>
        </div>
    `;
});
