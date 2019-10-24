json.movings do
  @movings.each do |moving|
    json.set! moving.stage_id do
      json.partial! 'moving', moving: moving
    end
  end
end

json.stages do
  @stages.each do |stage|
    json.set! stage.id do
      json.partial! 'stages/stage', stage: stage
    end
  end
end

json.application do
  json.extract! @application, :id, :job_id, :user_id, :comment
end

json.user do
  json.extract! @application.user, :id, :email
end
