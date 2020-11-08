class ApplicationController < ActionController::API
    def set_current_user
        @current_user = User.find_by(id: session[:user_id])
    end
    
    def check_if_logged_in?
        !set_current_user.nil?     
    end
   
    def current_user
        session[:user] ||= []
    end
end
