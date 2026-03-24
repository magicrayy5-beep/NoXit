// Update nilai Slider
document.querySelectorAll('.slider').forEach(s => {
    s.oninput = function() {
        this.nextElementSibling.innerText = this.value;
    }
});

function toggleAI() {
    const isChecked = document.getElementById('ai-toggle').checked;
    const log = document.getElementById('ai-log');
    if (isChecked) {
        log.innerText = "AI Mode: Scanning pixel response...";
        log.style.color = "#00ff00";
    } else {
        log.innerText = "AI Mode: Standby.";
        log.style.color = "#0088ff";
    }
}

function toggleHud() {
    document.getElementById('hud-overlay').classList.toggle('hud-hidden');
}

function activate(tool) {
    alert(tool + " telah diaktifkan dengan akses penuh!");
}

function runCore() {
    alert("Semua pengaturan NoXit v1.0 telah diterapkan ke sistem game.");
}

