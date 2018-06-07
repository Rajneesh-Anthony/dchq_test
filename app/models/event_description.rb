# == Schema Information
#
# Table name: event_descriptions
#
#  id          :integer          not null, primary key
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class EventDescription < ActiveRecord::Base
  attr_accessible :description
  has_one :event
end
