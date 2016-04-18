class LinksController < ApplicationController
  def index
    @links = Link.all
  end

  def create
    @link = Link.new(link_params)
    if @link.save
      flash[:notice] = "Link Saved"
      redirect_to dashboard_path
    else
      flash[:notice] = "Invalid Link. Try again sucka."
      redirect_to dashboard_path
    end
  end

  def update
    @link = Link.find(params[:id])
    @link.update_read_status
    redirect_to dashboard_path
  end

  private

  def link_params
    params.require(:link).permit(:title, :url)
  end
end
