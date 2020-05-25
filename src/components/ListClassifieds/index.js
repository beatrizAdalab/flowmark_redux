import ListClassifieds from './ListClassifieds';
import { connect } from 'react-redux';
import { getUi, getStore } from '../../store/selectors';
import { fetchClassifieds, fetchTags } from '../../store/actions';

function mapStateToProps(state, ownProps) {
  return {
    ui: getUi(state),
    store: getStore(state)
  };
}

const mapDispatchToProps = {
  fetchClassifieds,
  fetchTags
};

const connected = connect(mapStateToProps, mapDispatchToProps);
const ListClassifidesConnected = connected(ListClassifieds);


export default ListClassifidesConnected;