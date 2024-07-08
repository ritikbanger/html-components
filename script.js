document.addEventListener('DOMContentLoaded', () => {
    const allPagesCheckbox = document.getElementById('all-pages');
    const pageCheckboxes = document.querySelectorAll('.page-checkbox');

    allPagesCheckbox.addEventListener('change', () => {
        const isChecked = allPagesCheckbox.checked;
        pageCheckboxes.forEach(checkbox => {
            checkbox.checked = isChecked;
        });
    });

    pageCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const allChecked = Array.from(pageCheckboxes).every(checkbox => checkbox.checked);
            allPagesCheckbox.checked = allChecked;
        });
    });
});

function handleDoneClick() {
    alert('Done button clicked');
}
