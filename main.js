(function(){
  const esBtn=document.getElementById('esBtn');
  const enBtn=document.getElementById('enBtn');
  function setLanguage(lang){
    document.documentElement.lang=lang;
    document.querySelectorAll('[data-lang]').forEach(el=>{el.hidden=el.getAttribute('data-lang')!==lang;});
    document.querySelectorAll('[data-placeholder-es]').forEach(el=>{el.placeholder=lang==='es'?el.getAttribute('data-placeholder-es'):el.getAttribute('data-placeholder-en');});
    document.querySelectorAll('#service option').forEach(option=>{const es=option.getAttribute('data-es'),en=option.getAttribute('data-en');if(es&&en) option.textContent=lang==='es'?es:en;});
    if(esBtn&&enBtn){esBtn.classList.toggle('active',lang==='es');enBtn.classList.toggle('active',lang==='en');esBtn.setAttribute('aria-pressed',String(lang==='es'));enBtn.setAttribute('aria-pressed',String(lang==='en'));}
    try{localStorage.setItem('gcsLang',lang)}catch(e){}
  }
  if(esBtn) esBtn.addEventListener('click',()=>setLanguage('es'));
  if(enBtn) enBtn.addEventListener('click',()=>setLanguage('en'));
  const form=document.getElementById('leadForm');
  if(form){form.addEventListener('submit',event=>{event.preventDefault();const lang=document.documentElement.lang==='en'?'en':'es';const value=id=>document.getElementById(id)?.value.trim()||'';const message=lang==='en'?`Hello, I would like information from Global Customer Solutions.\n\nName: ${value('name')}\nCompany: ${value('company')}\nEmail: ${value('email')}\nPhone: ${value('phone')}\nService of interest: ${value('service')}\nMessage: ${value('message')}`:`Hola, quiero información de Global Customer Solutions.\n\nNombre: ${value('name')}\nEmpresa: ${value('company')}\nCorreo: ${value('email')}\nTeléfono: ${value('phone')}\nServicio de interés: ${value('service')}\nMensaje: ${value('message')}`;window.open(`https://wa.me/526621862441?text=${encodeURIComponent(message)}`,'_blank','noopener');});}
  let initial='es';try{const stored=localStorage.getItem('gcsLang');if(stored==='es'||stored==='en') initial=stored}catch(e){}
  setLanguage(initial);
})();