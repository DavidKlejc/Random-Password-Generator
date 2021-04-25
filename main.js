const numberOfCharactersRange = document.getElementById('numberOfCharactersRange')
const numberOfCharacters = document.getElementById('numberOfCharacters')

numberOfCharactersRange.addEventListener('input', syncRangeSlider)
numberOfCharacters.addEventListener('input', syncRangeSlider)

// Syncs range slider for the passwords length with corresponding number of characters
function syncRangeSlider(e) {
    const value = e.target.value
    numberOfCharactersRange.value = value
    numberOfCharacters.value = value
} 