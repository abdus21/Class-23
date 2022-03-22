

class Alert {


   static danger(msg){
     return `<p class="alert alert-danger alert-dismissible d-flex justify-content-between">${msg}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></p>`
    }
   static success(msg){
        return `<p class="alert alert-success alert-dismissible d-flex justify-content-between">${msg}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></p>`
    }
   static warning(msg){
        return `<p class="alert alert-warning alert-dismissible d-flex justify-content-between">${msg}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></p>`
    }
}

export default Alert;