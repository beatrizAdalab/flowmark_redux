import ListClassifieds from './ListClassifieds';
import { connect } from 'react-redux';
import { getUi, getStore, getClassifieds, getTags } from '../../store/selectors';
import { fetchClassifieds, fetchTags } from '../../store/actions';

function mapStateToProps(state, ownProps) {
  return {
    ui: getUi(state),
    store: getStore(state),
    classifieds: getClassifieds(state),
    tags: getTags(state)
  };
}

const mapDispatchToProps = {
  getClassifieds: fetchClassifieds,
  getTags: fetchTags,
};

const connected = connect(mapStateToProps, mapDispatchToProps);
const ListClassifidesConnected = connected(ListClassifieds);


export default ListClassifidesConnected;