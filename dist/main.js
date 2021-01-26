(()=>{"use strict";const e=JSON.parse('{"x":[{"title":"Hello, world.","post":"Hello, world. I\'m an American living in Hokkaido, Japan. I started ezo lines to share thoughts about life here.<br><br>Like so many other English speakers in Japan, I came here as a ALT. It\'s my third year doing this job and I\'ve really come around to it. My students are shy, country kids, but they have soft hearts and teach me a lot about not seeking perfection in everything. Hell, for some of them, just making it to school is a pretty good step. For someone that spent so much of their school years stressing about their grades and comparison to their classmates, it\'s freeing to see the approach my students have to school. However, being a do-er (a person who finds it hard to just be), I decided to build this blog and see the progression of my thoughts about being here in the north. Will I keep this up for very long? Who knows. If I stop, perhaps that\'s the only sign I need to understand that I\'m not actually that interested in maintaining a blog.<br><br> Lately, I have been writing a lot of code, including this site. Crafting stuff was something I always liked, but rarely found the confidence or made the time to do it. Now that I\'ve taken it up in earnest, it\'s nice to see the things I can make and the challenges I can learn to solve. It\'s makes me feel very capable.<br><br>I also have been practicing meditation following the teachings of Ajahn Brahm and other Thai forest monks. So often they talk about letting go of the self. With an ego, there is usually the impetus to protect that ego which leads to anger, embarrassment, and other emotions cause us to bring harm to others and ourselves. As someone who found creating things like a blog a risk to the ego, I hope that being truthful about my thoughts and sharing my mistakes in an open format can help me understand more about letting go of the self. We aren\'t perfect and the digital world makes that obvious. However, while many folks take that as an opportunity to disparage the imperfections they witness in other digital lives, I hope to show myself that past thoughts whether agreeable or disagreeable are impermanent. What\'s the point in attacking them if they are in the past? If you asked me this question several years ago when I was studying history in college, my answer would have probably been saying that there is a very strong reason to use history to criticize the problems of current society and to perhaps go so far as to blame those that supposedly benefit from past unfairness. But how does that bring joy to our world? How does that create compassion? \'But what about truth?! What about making the world better?!,\' my past self screams. As Ajahn Brahm points out in many of his talks, what good are our beliefs if they supercede compassion for other beings? If our beliefs bring us to suggest harm of others, perhaps they are worth examining. In Japan, this concept seems to be practiced quite widely as violence or conflict are generally not allowed in social interactions. In the U.S.A., many of the people I know and beyond may find this in direct opposition to their personal view.","jp":"<br><br>日本語<br><br>や、世界のみんなさん。僕は北海道に住んでいるアメリカ人です。人生について思いを論じるため、この　ezo lines ブログをつくりました。<br><br>他の日本に住んでいる外国人と同じく、ALTの仕事で日本に来ました。今年は3年目ですが、気に入ってます。生徒はシャイで、田舎でずっと育てるけど、全員はお人好し、そしてやりすぎないのは大事とおしえられています。学校に行くだけでもう十分ぐらい多少の生徒がいます。今までの完全主義者の僕は、吞気なライフスタイルを見て、もっと自由に生活しようとしています。ただ、そんなにすぐ変わらない、いつも何かをやってる僕は、北海道の生活について思いの展開を気歴するため、このブログをつくりました。このブログを長く続くか知りません。やめようと思ったら、やっぱりあまりやる気がなかったと思うしかないです。<br><br> 最近は、ezo linesを含めて、プログラミング練習をやってます。ものを作るのがずっとすきだったけど、自信と時間が足りなくて、あまりやってないです。いま一生懸命やってますが、作ったものを見るや、チャレンジを乗り越えるが楽しいです。有能があると感じます。<br><br> 瞑想もハマってて、Ajahn　Brahm　などタイ森仏教お坊さんの話を聴いてます。いつも自我を放すのことをはなししてます。自我があると、自我を守らなければならないのことになり、怒ったり、恥ずかしくなったり、自分と他の人を苦しめさせられます。ブログを作るのは恥ずかしいと思ってた僕は、成功と失敗あいかわらず、正直に思いを書いたら、自我をあまり気にしなくなるかなと思ってます。人間は完璧なものではないので、SNSなど、インタネットの生活からして、あっという間に分かります。何人がネットで他の人の不備を見て、批判するけど、過去に思ったことがどんどん変わってくることを注目したいと思います。過去の失敗を批判することは意味がないです。大学生の時、歴史を勉強してた僕は、過去の不公平を勉強するのは大事で、現在の不公平に一生懸命に反対するのもだいじだと言うと思います。ただ、そういうことしたら、幸せになりますか。人間社会は今より優しくになりますか。過去の僕は、事実はだいじじゃないか、より良い世界は大事じゃないですかと叫ぶかもしれません。ただ、Ajahn　Brahm　を言う通り、確信が同情より強くなるの状態は辛くないですか。確信を通じて、他の人を邪魔する、ケガさせるの人生は幸せではないと思います。日本に、争いと暴力は主にやっていけいないものです。しかし、アメリカに住んでいる知り合いの中でも、真逆の考え方があると思います。","date":"January 19, 2021","id":"0"}]}');window.addEventListener("DOMContentLoaded",(function(){console.log("init"),console.log("posts: ",e.x);const t=window.innerWidth,o=e.x,a=document.querySelector("html"),s=document.querySelector(".blog-text"),n=document.querySelector(".blog-date"),i=document.querySelector(".blog-title"),r=document.querySelector(".sidebar"),l=document.querySelector(".sidebar-items-list"),h=document.querySelector(".blog-inner"),c=document.querySelector(".content");function d(e){console.log("settting post with index: ",e);const t=new RegExp("'(?=[A-Z])","g"),a=new RegExp("(?<=[.,?!])'","g");o[e]?(s.innerHTML=o[e].post.replace(a,'" ').replace(t,' "'),s.insertAdjacentHTML("beforeend",o[e].jp),n.innerText=o[e].date,i.innerText=o[e].title):s.innerText="Sorry! No post matches that id.",console.log(typeof e),function(e){(function(){for(console.log("clearing items");l.firstChild;)l.removeChild(l.firstChild)})(),console.log("cleared items");const t=o.reduce(((e,t)=>(e.push(`<li class="list-item" data-id="${t.id}"><a class="post-link" href="#${t.id}"><span class="list-item-title">${t.title}</span><br><span class="list-item-date">${t.date}</span></a></li>`),e)),[]).join("");l.innerHTML=t}(parseInt(e,10))}r.addEventListener("mouseover",(function(){console.log("hovered"),document.querySelector("body").style.backdropFilter="blur(5px)"})),r.addEventListener("mouseout",(function(){document.querySelector("body").style.backdropFilter="blur(15px)"})),window.onhashchange=function(){console.log("the hash changed!",location.hash);let e=location.hash.replace("#","");console.log(e),e||(e=o.length-1),d(e)},h.addEventListener("scroll",(function(e){console.log(e.target.scrollTop);const o=t>800?"X":"Y";e.target.scrollTop>0&&e.target.scrollTop<100?r.style.transform=`translate${o}(-${e.target.scrollTop}%)`:e.target.scrollTop>=100?(c.classList.add("fullscreen"),r.classList.add("hide")):(c.classList.remove("fullscreen"),r.classList.remove("hide"),r.style.transform="unset")})),function(){console.log("back set");const e=(new Date).getMonth();a.style.background=e>10||e<3?"#acdeff url(https://images.unsplash.com/photo-1545014393-76c7b8936c76?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80)":e<6?"#acdeff url(https://images.unsplash.com/photo-1603435580027-f30889418372?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80)":e<9?"#acdeff url(https://images.unsplash.com/photo-1545361682-831ddf84b29d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80)":"#acdeff url(https://images.unsplash.com/photo-1573718893672-86144926f4fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",a.style.backgroundSize="cover"}(),location.hash?(console.log("not the home page"),d(location.hash.replace("#",""))):d(o.length-1)}))})();