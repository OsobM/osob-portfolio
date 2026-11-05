const sections=[
  {
      tab:'ABOUT ME',color:'#d9826d',heading:'A little about me.',kicker:'Dear reader,',description:'Welcome to my little corner of the internet. A growing collection of stories, photographs, observations, and all the odds and ends that make me who I am.',a:['An introduction','This is where my personal stories and photographs will live.'],b:['Things worth keeping','A collection of the people, places, and ideas that shape my world.']
  }
  ,
  {
      tab:'ART',color:'#d8b45e',heading:'The art of making.',kicker:'Drawn, collected, and unfinished',description:'A place for the things I make: sketches, design experiments, photographs, visual notes, and ideas that have yet to become something.',a:['The sketchbook','A home for artwork and creative experiments.'],b:['Works in progress','Not everything worth sharing has to be finished.']
  }
  ,
  {
      tab:'SCHOOL',color:'#89ab99',heading:'Notes from school.',kicker:'Filed under: learning',description:'My academic journey in computer science, from coursework and research to small discoveries made along the way.',a:['Course notes','Selected coursework, lessons, and class projects.'],b:['Research & projects','An index of questions I have tried to answer.']
  }
  ,
  {
      tab:'CAREER',color:'#84a8bc',heading:'Work & experience.',kicker:'The professional record',description:'My résumé, experience, technical projects, and the work I hope to keep doing. Part history, part work in progress.',a:['The résumé','Education, experience, skills, and accomplishments.'],b:['Selected work','Projects and professional work I would like to share.']
  }
  ,
  {
      tab:'CURRENTLY',color:'#b49baa',heading:'As of lately...',kicker:'In the present tense',description:'A running collection of what I am reading, watching, listening to, learning, and thinking about right now.',a:['On my mind','Thoughts, passing fascinations, and little observations.'],b:['Recently discovered','A shelf of recommendations and curiosities.']
  }
  ,
  {
      tab:'HOBBIES',color:'#c79a6d',heading:'Odds & ends.',kicker:'Outside the margins',description:'Hobbies, little adventures, collections, and everything I enjoy for no reason other than the joy of it.',a:['Spare-time pursuits','The things I enjoy doing just for fun.'],b:['Little adventures','Places visited, memories collected, and stories to tell.']
  }
  ];
  const archive=document.getElementById('archive'),tabs=document.getElementById('tabs'),directory=document.getElementById('directory');
  sections.forEach((s,i)=> {
      const b=document.createElement('button');b.type='button';b.textContent=s.tab;b.style.setProperty('--c',s.color);b.addEventListener('click',()=>show(i));tabs.appendChild(b);const d=document.createElement('button');d.type='button';d.className='mini-button';d.textContent=s.tab.toLowerCase();d.addEventListener('click',()=>show(i));directory.appendChild(d)
  }
  );
  function put(id,v) {
      document.getElementById(id).textContent=v
  }
  function show(i) {
      const s=sections[i];
      archive.style.setProperty('--paper',s.color);
      [...tabs.children].forEach((b,j)=>b.setAttribute('aria-selected',String(i===j)));
      [...directory.children].forEach((b,j)=>b.setAttribute('aria-current',i===j?'page':'false'));
      const n=String(i+1).padStart(3,'0');
      put('record','PERSONAL RECORDS / '+String(i+1).padStart(2,'0'));
      put('file','FILE NO. '+n);
      put('kicker',s.kicker);
      put('heading',s.heading);
      put('description',s.description);
      put('note1Title',s.a[0]);
      put('note1Text',s.a[1]);
      put('note2Title',s.b[0]);
      put('note2Text',s.b[1]);
      put('foot','— '+n+' —');
      document.title=s.tab+' — The Osob Files'
  }
  show(0);
