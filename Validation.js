
function validation() {
    let val = false
    const handleLogin = (e) => {
        e.preventDefault()
        onSubmit(e)
        if (val) {
            // right code here
            console.log('helloo')
        }

    }
}
const onSubmit = (e) => {
    const formData = new FormData(e.target)
    let user = []
    e.preventDefault()
    for (let [name, value] of formData) {
        user.push({
            ["label"]: name,
            ["value"]: value
        })
        if (value == '') {
            val = false
            document.getElementById(name).focus();
            return;
        }
        else {
            val = true
        }
    }
}

module.export.validation = validation;
