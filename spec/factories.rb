FactoryGirl.define do
  factory :create_link do
    url "MyString"
    title "MyString"
    read_status "MyString"
    user nil
  end
  factory :user do
    email "MyString"
    password_digest "MyString"
  end
end