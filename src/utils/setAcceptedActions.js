export default function setAcceptedActions(actions, fileFormats, mimeType) {
  let AcceptedType = fileFormats.map(format => {
    const type = format.identifiers.find(item => item.identifier === mimeType);
    if (type) {
      return {
        mime: type.identifier,
        name: format.id.name,
      };
    }
    return {};
  });
  AcceptedType = AcceptedType.find(e => e?.name);
  const AcceptedActions = actions.filter(action => action?.constraints[0]?.allowedFormats
    .find(item => item?.id.name === AcceptedType?.name));
  const AcceptAll = actions.filter(action => action.constraints.length === 0);
  return [...AcceptedActions, ...AcceptAll];
}
