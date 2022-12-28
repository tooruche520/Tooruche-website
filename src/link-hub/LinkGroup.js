import LinkItem from './LinkItem.js';

function LinkGroup(props) {
    let group_title = props.group['link-group-title'];
    let group = props.group['link-group'];
    
	return (
		<div className="link-group">
			<h1>
				<mark>
					{group_title}
				</mark>
			</h1>
			<div className="group-items">
				{group.map(items => {
					return <LinkItem item={items} />;
				})}
			</div>
		</div>
	);
}

export default LinkGroup;
