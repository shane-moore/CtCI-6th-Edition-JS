// write method to replace all spaces in a string with "%20"
const urlify = (url) => {
    url = url.replace(/\s/g, "%20");
    console.log( url );
}
urlify("peanut butter jelly time")