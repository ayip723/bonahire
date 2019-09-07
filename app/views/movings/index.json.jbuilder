json.movings do
  @movings.each do |moving|
    json.set! moving.id do
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
