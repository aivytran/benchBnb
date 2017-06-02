class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      signin(@user)
      render './api/users/show'
    else
      render json: ["Invalid credentials"], status: 422
    end
  end

  def destroy
    signout
    render './api/users/show'
  end
end
