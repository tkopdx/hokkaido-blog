const data = {
    "posts": [
      {
        "title": "Hello, world.",
        "post": "Hello, world. I'm an American living in Hokkaido, Japan. I started ezo lines to share thoughts about life here.<br><br>Like so many other English speakers in Japan, I came here as a ALT. It's my third year doing this job and I've really come around to it. My students are shy, country kids, but they have soft hearts and teach me a lot about not seeking perfection in everything. Hell, for some of them, just making it to school is a pretty good step. For someone that spent so much of their school years stressing about their grades and comparison to their classmates, it's freeing to see the approach my students have to school. However, being a do-er (a person who finds it hard to just be), I decided to build this blog and see the progression of my thoughts about being here in the north. Will I keep this up for very long? Who knows. If I stop, perhaps that's the only sign I need to understand that I'm not actually that interested in maintaining a blog.<br><br> Lately, I have been writing a lot of code, including this site. Crafting stuff was something I always liked, but rarely found the confidence or made the time to do it. Now that I've taken it up in earnest, it's nice to see the things I can make and the challenges I can learn to solve. It's makes me feel very capable.<br><br>I also have been practicing meditation following the teachings of Ajahn Brahm and other Thai forest monks. So often they talk about letting go of the self. With an ego, there is usually the impetus to protect that ego which leads to anger, embarrassment, and other emotions cause us to bring harm to others and ourselves. As someone who found creating things like a blog a risk to the ego, I hope that being truthful about my thoughts and sharing my mistakes in an open format can help me understand more about letting go of the self. We aren't perfect and the digital world makes that obvious. However, while many folks take that as an opportunity to disparage the imperfections they witness in other digital lives, I hope to show myself that past thoughts whether agreeable or disagreeable are impermanent. What's the point in attacking them if they are in the past? If you asked me this question several years ago when I was studying history in college, my answer would have probably been saying that there is a very strong reason to use history to criticize the problems of current society and to perhaps go so far as to blame those that supposedly benefit from past unfairness. But how does that bring joy to our world? How does that create compassion? 'But what about truth?! What about making the world better?!,' my past self screams. As Ajahn Brahm points out in many of his talks, what good are our beliefs if they supercede compassion for other beings? If our beliefs bring us to suggest harm of others, perhaps they are worth examining. In Japan, this concept seems to be practiced quite widely as violence or conflict are generally not allowed in social interactions. In the U.S.A., many of the people I know and beyond may find this in direct opposition to their personal view.",
        "jp":"<br><br>日本語<br><br>や、世界のみんなさん。僕は北海道に住んでいるアメリカ人です。人生について思いを論じるため、この　ezo lines ブログをつくりました。<br><br>他の日本に住んでいる外国人と同じく、ALTの仕事で日本に来ました。今年は3年目ですが、気に入ってます。生徒はシャイで、田舎でずっと育てるけど、全員はお人好し、そしてやりすぎないのは大事とおしえられています。学校に行くだけでもう十分ぐらい多少の生徒がいます。今までの完全主義者の僕は、吞気なライフスタイルを見て、もっと自由に生活しようとしています。ただ、そんなにすぐ変わらない、いつも何かをやってる僕は、北海道の生活について思いの展開を気歴するため、このブログをつくりました。このブログを長く続くか知りません。やめようと思ったら、やっぱりあまりやる気がなかったと思うしかないです。<br><br> 最近は、ezo linesを含めて、プログラミング練習をやってます。ものを作るのがずっとすきだったけど、自信と時間が足りなくて、あまりやってないです。いま一生懸命やってますが、作ったものを見るや、チャレンジを乗り越えるが楽しいです。有能があると感じます。<br><br> 瞑想もハマってて、Ajahn　Brahm　などタイ森仏教お坊さんの話を聴いてます。いつも自我を放すのことをはなししてます。自我があると、自我を守らなければならないのことになり、怒ったり、恥ずかしくなったり、自分と他の人を苦しめさせられます。",
        "date": "January 19, 2021",
        "id": "0"
      }
    ]
  }

async function init() {

    console.log('init');

    console.log('posts: ', data.posts);

    const posts = data.posts;

    const doc = document.querySelector('html');
    const mainPost = document.querySelector('.blog-text');
    const postDate = document.querySelector('.blog-date');
    const postTitle = document.querySelector('.blog-title');
    const sidebar = document.querySelector('.sidebar');
    const itemsList = document.querySelector('.sidebar-items-list');

    sidebar.addEventListener('mouseover', removeBlur);
    sidebar.addEventListener('mouseout', addBlur);
    window.onhashchange = hashHandler;

    setBackground();

    if (location.hash) {
        console.log('not the home page');
        setPost(location.hash.replace('#', ''));
    } else {
        setPost(posts.length - 1);
    }
    
    function setBackground() {
        console.log('back set');

        const now = new Date();
    
        const month = now.getMonth();
    
        if (month > 10 || month < 3) {
            doc.style.background = `#acdeff url(https://images.unsplash.com/photo-1545014393-76c7b8936c76?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80)`;
        } else if (month < 6) {
            doc.style.background = `#acdeff url(https://images.unsplash.com/photo-1603435580027-f30889418372?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80)`;
        } else if (month < 9) {
            doc.style.background = `#acdeff url(https://images.unsplash.com/photo-1545361682-831ddf84b29d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80)`;
        } else {
            doc.style.background = `#acdeff url(https://images.unsplash.com/photo-1573718893672-86144926f4fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)`;
        }
    
        doc.style.backgroundSize = 'cover';
    }
    
    function setPost(ind) {

        console.log('settting post with index: ', ind);

        const regLeadingQuotes = new RegExp("'(?=[A-Z])", 'g');
        const regTrailingQuotes = new RegExp("(?<=[.,?!])'", 'g');
        
        if (posts[ind]) {
            mainPost.innerHTML = posts[ind].post.replace(regTrailingQuotes, '" ').replace(regLeadingQuotes, ' "');
            mainPost.insertAdjacentHTML('beforeend', posts[ind].jp);
            postDate.innerText = posts[ind].date;
            postTitle.innerText = posts[ind].title;
        } else {
            mainPost.innerText = `Sorry! No post matches that id.`
        }
        

        console.log(typeof ind);

        setItemsList(parseInt(ind, 10));
    }

    function setItemsList(index) {

        clearItemsList();

        console.log('cleared items');

        const items = posts.reduce((acc, post) => {
            acc.push(`<li class="list-item" data-id="${post.id}"><a class="post-link" href="#${post.id}"><span class="list-item-title">${post.title}</span><br><span class="list-item-date">${post.date}</span></a></li>`);
            return acc;
        }, []).join('');

        itemsList.innerHTML = items;
    }

    function clearItemsList() {
        console.log('clearing items');
        
        while (itemsList.firstChild) {
            itemsList.removeChild(itemsList.firstChild);
        }
    }

    function removeBlur() {
        console.log('hovered');
        document.querySelector('body').style.backdropFilter = `blur(5px)`;
    }
    
    function addBlur() {
        document.querySelector('body').style.backdropFilter = `blur(15px)`;
    }

    function hashHandler() {
        console.log('the hash changed!', location.hash);
    
        let id = location.hash.replace('#', '');
    
        console.log(id);

        id ? null : id = posts.length - 1;
    
        setPost(id);
    }
}



window.addEventListener('DOMContentLoaded', init);




