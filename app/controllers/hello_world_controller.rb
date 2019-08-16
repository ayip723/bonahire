# frozen_string_literal: true

class HelloWorldController < ApplicationController
  layout "hello_world"

  def index
    # @hello_world_props = { name: "Stranger" }
    if current_user
      @hello_world_props = { name: {name: 'Stranger'}, companies: {}, session: { id: current_user.id }, entities: { users: {}} }
      @hello_world_props[:entities][:users][current_user.id] = current_user.attributes.slice('id', 'email')
    else
      @hello_world_props = { name: {name: 'Stranger'}, companies: {} }
    end
  end
end
