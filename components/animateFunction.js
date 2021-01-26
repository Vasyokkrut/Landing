import styles from '../styles/skills.module.css'

function animate() {
  // getting all logos and description elements
  // and creating array with them
  // these arrays keep unanimated elements
  // so as they will be animated, they will be removed from array
  // using array's filter method
  let logos = document.getElementsByClassName(styles.skillLogo)
  logos = Array.from(logos)
  let descriptions = document.getElementsByClassName(styles.description)
  descriptions = Array.from(descriptions)

  // using filter method to delete animated elements
  logos = logos.filter(element => {
    if (window.innerHeight > element.offsetTop) {
      element.classList.add(styles.animateLogo)
      return false
    }
    return true
  })
  descriptions = descriptions.filter(element => {
    if (window.innerHeight > element.offsetTop) {
      element.classList.add(styles.animateDescription)
      return false
    }
    return true
  })

  let update = () => {
    // checking if all elements has been animated
    // if yes, deleting onscroll event listener
    if (logos.length === 0 && descriptions.length === 0) {
      return window.removeEventListener('scroll', update)
    }

    // animating element when it appears on screen
    // and deleting it from array
    logos = logos.filter(element => {
      if (window.innerHeight + window.scrollY - 100 > element.offsetTop) {
        element.classList.add(styles.animateLogo)
        return false
      }
      return true
    })
    descriptions = descriptions.filter(element => {
      if (window.innerHeight + window.scrollY - 100 > element.offsetTop) {
        element.classList.add(styles.animateDescription)
        return false
      }
      return true
    })
  }
  // adding onscroll event listener
  window.addEventListener('scroll', update)
}

export default animate
