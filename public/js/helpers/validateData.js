export function validateUserData(name, email, reviewText, reviewScore) {

    let hasError = false,
        validEmailPattern = /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/;

    if (!name || !email || !reviewText || !reviewScore) {
        toastr.error("Всички полета са задължителни");
        hasError = true;
        return hasError;
    }
    if (name.length <= 3 || name.length >= 30) {
        toastr.error("Вашето име трябва да бъде между 3 и 30 символа");
        hasError = true;
        return hasError;
    }

    if (!email.match(validEmailPattern)) {
        toastr.error("Моля, въведете валиден e-mail адрес");
        hasError = true;
        return hasError;
    }

    return hasError;
}