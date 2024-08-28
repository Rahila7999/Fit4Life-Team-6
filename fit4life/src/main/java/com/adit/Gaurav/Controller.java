package com.adit.Gaurav;


import org.springframework.web.bind.annotation.GetMapping;



@org.springframework.stereotype.Controller
public class Controller {	
	@GetMapping("index")
	public String gethome() {
		return "index";
	}
	
	@GetMapping("/workout")
    public String getWorkoutPage() {
        return "workout"; 
    }
	
    

	@GetMapping("/about")
    public String getaboutPage() {
        return "about"; 
    }
	
	@GetMapping("/contact")
    public String getcontactPage() {
        return "contact"; 
    }
	
	@GetMapping("/team")
    public String getteamPage() {
        return "team"; 
    }
	
	@GetMapping("/forget")
    public String getforgetPage() {
        return "forget"; 
    }
	
	@GetMapping("/login")
    public String getloginPage() {
        return "login"; 
    }
	
	@GetMapping("/signup")
    public String getsignupPage() {
        return "signup"; 
    }
	
	@GetMapping("/video")
    public String getvideoPage() {
        return "video"; 
    }
	
	
	
	
}
