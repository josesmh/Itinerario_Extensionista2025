document.addEventListener('DOMContentLoaded', () => {
  const topicLinks = document.querySelectorAll('.topics-menu__link');
  const contentTopics = document.querySelectorAll('.content-topic');
  const iconSets = document.querySelectorAll('.icon-set');
  const mainPanel = document.querySelector('.panel--main');

  const showContent = (targetId) => {
    let foundSection = false;
    contentTopics.forEach(topic => {
      if (`#${topic.id}` === targetId) {
        topic.classList.add('is-active');
        foundSection = true;
      } else {
        topic.classList.remove('is-active');
      }
    });

    const shapeTargetId = `#shapes-${targetId.substring(1)}`;
    iconSets.forEach(container => {
      if (`#${container.id}` === shapeTargetId) {
        container.classList.add('is-active');
      } else {
        container.classList.remove('is-active');
      }
    });
    return foundSection;
  };

  topicLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        e.preventDefault();

        if (document.querySelector(targetId)?.classList.contains('is-active')) {
          return;
        }
        
        showContent(targetId);
      }
    });
  });

  const initialTarget = window.location.hash || '#data-centers';
  if (!showContent(initialTarget)) {
    showContent('#data-centers');
  }
  
  document.body.classList.add('loaded');
});