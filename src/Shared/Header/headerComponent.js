var render = function render() {
  document.getElementById('testid').addEventListener('click', function () {
    alert('clicked on a');
  });
};

export default { render };
