require 'rails_helper'

RSpec.describe User, type: :model do
  let!(:user1) { User.new(email: 'test@test.com', password: 'pass') }

  it "creates a user with correct parameters" do
    expect(user1.email).to eq("test@test.com")
  end
end
