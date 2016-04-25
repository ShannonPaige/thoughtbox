class Api::V1::LinksController < Api::V1::BaseController
  def index
    respond_with current_user.links.search_filter(params[:search_term]).order_by(params[:order_type])
  end

  def create
    respond_with :api, :v1, current_user.links.create(link_params)
  end

  def update
    link = current_user.links.find(params["id"])
    link.update_attributes(link_params)
    respond_with link, json: link
  end

 private

  def link_params
    params.require(:link).permit(:title, :url, :read_status)
  end
end
