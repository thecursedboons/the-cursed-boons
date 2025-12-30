const stories = {
    Aperfectrevenge: {
        title: "A perfect revenge",
        image: "images/a-perfect-revenge-picture.jpg",
        warning: "Intended for readers above 18",
        content: `
<strong>DISCLAIMER:This story is a work of fiction. It neither promotes nor endorses any act described within.</strong>

What would you do if, after years of chasing the same question—who ruined everything in my life?—you finally found the answer.
This story is not an instruction. It is a confession.

Revenge is an art. Every art needs two things: an artist and a muse. I spent eternity searching for mine, always sensing I was on the verge. Out of the blue, one day, I found all my answers hidden in plain sight. I just had to look beyond what meets the eye. I recognised <em>His</em> face and, at once, realised <em>His</em> name.

For years, sleep escaped me—not because of insomnia, but because I could not allow it. You might ask—what kept me awake all these years?
A goal.
My only goal.

Eventually, exhaustion forced sleep upon me—not to rest, but to relive something.
A dream.
A recurring dream.

Today marks the day I have been dreaming of for years. If you are reading this, you probably already know what that dream is about. You might ask—why today? A fair question, as I have known <em>Him</em> for a while, chanted <em>His</em> name like a mantra, and knew <em>His</em> face better than my own. But why must a day be “special”? The word has never applied to my life. Every day feels identical and indistinguishable, as though I am trapped in a 24-hour loop, condemned to repeat the same thoughts.

Today, at least, will be memorable.

I should introduce myself, though by now you already know enough. You must have a very vivid idea about my motive, and I hope the poignant picture of my dull life is spotlessly painted. I am simple. Easy-going, I believe. Unremarkable in every possible way—someone you need three or four meetings to remember. I never stand out in a crowd. I could be sitting next to you in a park or a movie theatre and you would never suspect what I am capable of.
<em>Like killing someone?
Oh—did I say kill?
You bet I did.</em>

I woke up today clutching a gun. I slept gripping it firmly in my hand, afraid that if I let go, my resolve would slip away with it. How did I get it? You don’t want to know. If you insist—I got it exactly the way you think. <em>What? Illegally? Yes.</em>

<em>Since we are being honest now, can we be friends? Only until you finish reading this. I will take your silence as a yes.</em>

I took the day off work, though routine still demanded preparation. I placed the gun on the mattress and washed my face. Then I brushed my teeth, took a bath, and chose one of the three plain blue shirts I own—the only colour I have ever owned. My monochromatic dressing aptly complements my monotonous life. It suits me. Predictable. Dull.

I do not own a mirror. Not because I cannot afford one, but purely by choice. I simply refuse to look at myself.

With a gun in my hand, a motive in my mind, and a desire in my soul, I walked—no, I sprinted. I knew exactly where I needed to be. I knew exactly who to look for when I reached the office. <em>His</em> office. I searched the cabin. <em>His</em> cabin.

Not a soul in sight.

Impatience drove me to the washroom.

And there <em>He</em> was.

Our eyes met. Neither of us blinked. <em>His</em> gaze dropped briefly to the metal in my hand, then swiftly returned to my face. I smirked. Before doing what I had come to do, I searched <em>His</em> eyes for something.
<em>Do you know what I was looking for?</em>

Tears came easily. Fear too. That pleased me. But regret—no. I wanted remorse, not terror. I waited, hoping it might surface. It never did.

Those transparent tears would change colour soon. I would see to that.

I tried to imagine life after revenge, but every version of it ended with me.

I raised the gun to <em>His</em> forehead. <em>He</em> shut <em>His</em> eyes, bracing for the inevitable. I took my time. Then—
<strong>BAM.</strong>
<em>Did you hear it too?</em>

The body collapsed.

You, as my friend, might look around for the killer.

There was no one there.

Only a mirror, soaked in fresh blood.
________________________________________

        `
    },

    voices317: {
        title: "A perfect escape",
        image: "images/voices-317.jpg",
        content: `
I am glad you are here. 

But this story is under progress.

Follow me on my socials to get an update when I post a new story.
        `
    },

};


function showSection(id) {
    document.querySelectorAll(".section").forEach(s =>
        s.classList.remove("active")
    );
    document.getElementById(id).classList.add("active");
}

function openStory(storyId) {
    const story = stories[storyId];
    const text = story.content.trim();
    const words = text.split(/\s+/).length;
    const time = Math.ceil(words / 200);

    document.getElementById("reader-title").innerText = story.title;
    document.getElementById("reader-content").innerHTML = story.content;
    document.getElementById("reader-meta").innerText =
        `${words} words • ${time} min read`;
    const twBox = document.getElementById("tw-box");

if (story.warning) {
    twBox.innerHTML = `<strong>Content Warning:</strong> ${story.warning}`;
    twBox.style.display = "block";
} else {
    twBox.style.display = "none";
    twBox.innerHTML = "";
}

twBox.style.cssText = `
    background:#1a0f0f;
    border-left:4px solid #b30000;
    padding:0.8rem 1rem;
    margin-bottom:1.5rem;
    font-style:italic;
`;

    const img = document.getElementById("reader-image");
    if (story.image) {
        img.src = story.image;
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }

    showSection("reader");
}

function toggleTheme() {
    document.body.classList.toggle("soft-dark");
}

document.getElementById("year").innerText = new Date().getFullYear();
