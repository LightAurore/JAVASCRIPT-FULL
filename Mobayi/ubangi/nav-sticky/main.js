const primaryHeader = document.querySelector('.primary-header');

const scrollWatcher = document.createElement('div');

scrollWatcher.classList.add('ma-div');

scrollWatcher.setAttribute('data-scroll-watcher', '');

primaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries)=>{
    console.log(entries);
    primaryHeader.classList.toggle('sticking', entries[0].boundingClientRect.top === 4  || !entries[0].isIntersecting
)
});

navObserver.observe(scrollWatcher);

