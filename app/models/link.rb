class Link < ActiveRecord::Base
  belongs_to :user

  def update_read_status
    if self.read_status == 'false'
      self.read_status = 'true'
    else
      self.read_status = 'false'
    end
    self.save
  end
end
