console.log('script.js loaded');

function filterProjects(category) {
  console.log('Filter clicked:', category);

  const projects = document.querySelectorAll('.project-card');
  console.log('Projects found:', projects.length);

  projects.forEach(project => {
    const projectCategory = project.dataset.category;

    if (category === 'all' || projectCategory === category) {
      project.classList.remove('d-none');
    } else {
      project.classList.add('d-none');
    }
  });
}

function showModalForProject(title, description) {
  document.getElementById('projectModalTitle').textContent = title;
  document.getElementById('projectModalDescription').textContent = description;

  const modal = new bootstrap.Modal(document.getElementById('projectModal'));
  modal.show();
}

document.addEventListener('DOMContentLoaded', () => {
  const backToTopButton = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.remove('d-none');
    } else {
      backToTopButton.classList.add('d-none');
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});


