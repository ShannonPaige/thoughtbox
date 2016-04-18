class Link < ActiveRecord::Base
  belongs_to :user

  def self.order_by(order_type)
    if order_type === 'alpha'
      order(title: :asc)
    elsif order_type == 'read_status'
      order(read_status: :asc)
    else
      order(created_at: :asc)
    end
  end
end
